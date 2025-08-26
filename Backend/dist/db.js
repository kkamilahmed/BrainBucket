import { model, Schema, Types } from "mongoose";
const userSchema = new Schema({
    username: { type: String, unique: true },
    password: { type: String, required: true }
});
const contentSchema = new Schema({
    link: { type: String },
    linkIMG: { type: String },
    desc: { type: String },
    title: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: "Users", required: true },
});
const linkSchema = new Schema({
    hash: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: 'Users', required: true },
});
export const userModel = model("Users", userSchema);
export const contentModel = model("Content", contentSchema);
export const linkModel = model("links", linkSchema);
//# sourceMappingURL=db.js.map