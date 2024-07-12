// import nodemailer from 'nodemailer';
// import {google} from "googleapis"
// import { GOOGLE_ID, GOOGLE_SECRETE, GOOGLE_URL, REFRESH_TOKEN } from './constant';



// const oAuth = new google.auth.OAuth2(
//     GOOGLE_ID,
//     GOOGLE_SECRETE,
//     GOOGLE_URL
// )

// oAuth.setCredentials({refresh_token:REFRESH_TOKEN})

// export const createaccountemail = async() => {
//     try {

//         const accessToken = (await oAuth.getAccessToken()).token;
        

//         const transport = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 type: "OAuth2",
//                 user: "osakweterrynduka@gmail.com",
//                 clientId: GOOGLE_ID,
//                 clientSecret: GOOGLE_SECRETE,
//                 refreshToken: REFRESH_TOKEN,
//                 accessToken,
//             }
//         })

//          const mailer = {
//             from: 'osakweterrynduka@gmail.com',
//             to: 'osakweterrynduka@gmail.com',
//             subject: 'Account Creation',
//             html: '<p>This is a test </p>'
//          }

//          transport.sendMail(mailer).then(() =>{
//             console.log("mailer sent")});
            

//     } catch (error) {
//         console.log(error);
        
//     }
// }