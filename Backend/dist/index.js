import express from "express";
import mongoose from "mongoose";
import { userModel, contentModel } from "./db.js";
import { userInputSchema, contentInputSchema } from "./schemas.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';
import { userMiddleware } from "./middleware.js";
import cors from "cors";
import axios from "axios";
import * as cheerio from "cheerio";
const JWTSECRET = "LMAOGETGOOD";
mongoose.connect("mongodb+srv://kkamilxvii:8obtBlYdClXQMMM8@cluster0.zan6mlk.mongodb.net/Brainbucket");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.post("/api/signup", async (req, res) => {
    const result = userInputSchema.safeParse(req.body);
    if (!result.success) {
        const errorMessages = result.error.issues.map(err => ({
            field: err.path.join("."),
            message: err.message,
        }));
        return res.status(400).json({ errors: errorMessages });
    }
    const validatedData = result.data;
    const userExists = await userModel.findOne({ username: validatedData.username });
    if (userExists)
        return res.status(403).json({ Error: "User Already Exist" });
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const user = new userModel({
        username: validatedData.username,
        password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ Message: "Sign Up Successful" });
});
app.post("/api/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await userModel.findOne({
        username: username
    });
    if (!existingUser) {
        return res.status(411).json({
            Message: "User Doesn't Exist"
        });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch) {
        const token = jwt.sign({ id: existingUser._id.toString() }, JWTSECRET);
        res.cookie("BrainCoin", token);
        res.status(200).json({
            "token": token
        });
        return;
    }
    res.status(411).json({
        Message: "Invalid Password"
    });
});
app.use(userMiddleware);
app.post("/api/content", async (req, res) => {
    const userId = req.userid.id;
    const { title, desc, link } = req.body;
    if (!title) {
        return res
            .status(400)
            .json({ errors: [{ field: "title", message: "Title is required" }] });
    }
    if (!desc && !link) {
        return res.status(400).json({
            errors: [
                {
                    field: "desc|link",
                    message: "Either description or URL must be provided",
                },
            ],
        });
    }
    let linkIMG;
    if (link) {
        try {
            const response = await axios.get(link);
            const html = response.data;
            const $ = cheerio.load(html);
            linkIMG = $('meta[property="og:image"]').attr("content");
            if (!linkIMG) {
                linkIMG = $("img").first().attr("src") || "";
            }
        }
        catch (err) {
            console.error("Error fetching image from URL:", err);
            return res
                .status(400)
                .json({
                errors: [
                    { field: "link", message: "Invalid URL or unable to fetch image" },
                ],
            });
        }
    }
    const contentData = {
        title,
        desc: desc || "",
        link: link || "",
        linkIMG: linkIMG || "",
        userId,
    };
    try {
        const content = new contentModel(contentData);
        await content.save();
        res.status(200).json({ Message: "Content Uploaded Successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ Message: "Server Error" });
    }
});
app.get("/api/content", async (req, res) => {
    const userId = req.userid.id;
    console.log("UserID from request:", userId);
    try {
        const data = await contentModel.find({ userId: userId });
        if (data) {
            console.log(data);
            return res.status(200).json({
                message: "Data Retrieved",
                data, // <-- send the actual data
            });
        }
        res.status(404).json({
            message: "No data found",
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Server Error",
            error: err,
        });
    }
});
app.delete("/api/content", (req, res) => {
});
app.delete("/api/delete", (req, res) => {
});
app.listen(3000);
//# sourceMappingURL=index.js.map