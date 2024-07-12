// import { dbConfig } from "@/utils/dbConfig"
// import usermodel from "@/utils/model/usermodel"
// import bcryptjs from "bcryptjs"
// import { request } from "http"
// import { NextRequest, NextResponse } from "next/server"

// export const POST = async(req:NextRequest) => {
//     try {
//         await dbConfig()
//         const {email,password} = await req.json()
    
//         const user = await usermodel.findOne({email})

//         if(user){
//           const check = await bcryptjs.compare(password,user.password)

//           if(check){
            
//             if(user.verify && user.verifytoken === ""){
//                 return NextResponse.json({
//                     message:"welcoming user successfully",
//                     status:201,
//                      data:user
//                 })
//             }else{
//                 return NextResponse.json({
//                     message:"account not verified",
//                     status:404,
//                 })
//             }
            
//           }else{
//             return NextResponse.json({
//                 message:"password incorrect",
//                 status:404,
                 
//             })
//           }
//         }else{
//             return NextResponse.json({
//                 message:"unable to get user",
//                 status:404,
                 
//             })
//         }


//     } catch (error) {
//         return NextResponse.json({
//             message:"unable to signin",
//             status:404,
             
//         })
//     }
// }
