import express from "express";
import mongoose from "mongoose";
import { userModel, contentModel, linkModel, tagModel } from "./db.js";
import { userInputSchema, contentInputSchema } from "./schemas.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';
import { userMiddleware } from "./middleware.js";
import cors from "cors";
const JWTSECRET = "LMAOGETGOOD";
mongoose.connect("mongodb+srv://kkamilxvii:8obtBlYdClXQMMM8@cluster0.zan6mlk.mongodb.net/Brainbucket");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
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
    const result = contentInputSchema.safeParse(req.body);
    if (!result.success) {
        const errorMessages = result.error.issues.map(err => ({
            field: err.path.join("."),
            message: err.message,
        }));
        return res.status(400).json({ errors: errorMessages });
    }
    const validatedData = result.data;
    const contentData = {
        ...validatedData, userId
    };
    contentData.userId = userId;
    const content = new contentModel(contentData);
    await content.save();
    res.status(200).json({ Message: "Content Uploaded Successfully" });
});
app.get("/api/content", async (req, res) => {
    const userId = req.userid.id;
    const data = await contentModel.find({
        userId: userId
    });
    if (data) {
        return res.status(200).json({
            message: "Data Retreieved"
        });
    }
    res.status(411).json({
        message: "Server Issues"
    });
});
app.delete("/api/content", (req, res) => {
});
app.delete("/api/delete", (req, res) => {
});
app.listen(3000);
//# sourceMappingURL=index.js.map