import { Schema, model, models } from "mongoose";
import { iUserModel } from "../interface";


const userdata = new Schema<iUserModel>({
    name:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String
    },
    verifytoken:{
        type: String
    },
    verify:{
        type: Boolean,
        default: false
    },
},{timestamps:true})

const usermodel = models.User || model<iUserModel>("User",userdata)

export default usermodel;