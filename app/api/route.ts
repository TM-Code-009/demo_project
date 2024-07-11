import { dbConfig } from "@/utils/dbConfig";
import usermodel from "@/utils/model/usermodel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Jwt_SECRET } from "@/utils/constant";
import { createaccountemail } from "@/utils/email";



export const POST = async(req:NextRequest) => {
    try {
        await dbConfig()
        const {name,email,password} = await req.json()
        
        const salt = await bcryptjs.genSalt(10)
        const hashed = await bcryptjs.hash(password,salt)

         const token = jwt.sign({email, hashed},Jwt_SECRET as string,{expiresIn: "2d"})

         console.log(token);
         

        const user = await usermodel.create({name,email,password:hashed,verifytoken:token})

        await createaccountemail();

        return NextResponse.json({
            message:"user created successfully",
            status:201,
             data:user
        })
    } catch (error) {
        return NextResponse.json({
            message:"unable to create user",
            status:404,
             
        })
    }
}


export const GET = async() => {
    try {
        await dbConfig()

        const users = await usermodel.find()
        return NextResponse.json({
            message:"Getting users",
            status:200,
             data:users
        })
    } catch (error) {
        return NextResponse.json({
            message:"Can't get users",
            status:404,
             
        })
    }
}