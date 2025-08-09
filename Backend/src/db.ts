import {model, Schema, Types} from "mongoose";


const userSchema = new Schema({
    username : {type:String, unique:true},
    password : {type:String, required:true}

});

const contentTypes = ['image', 'video', 'article', 'audio'];

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: 'Tag' }],
  userId: { type: Types.ObjectId, ref: 'Users', required: true },
});


const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: Types.ObjectId, ref: 'Users', required: true },
});

const tagSchema = new Schema({
  title: { type: String, required: true, unique: true }
});


export const userModel = model ("Users",userSchema);
export const contentModel = model ("Content",contentSchema);
export const linkModel = model ("links",linkSchema);
export const tagModel = model ("tags",tagSchema);