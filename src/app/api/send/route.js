require('dotenv').config();
import {NextResponse, NextRequest} from 'next/server'
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// const sendEmail = async (to, subject, text) => {
//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       text,
//     });
//     console.log("Email sent successfully!");
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// };

// module.exports = { sendEmail };

export async function POST(request){
  const {to, subject, text} = await request.json()

  const mailPromise = () => new Promise(
    (resolve, reject) => {
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
      }, function (err){
        if(!err){
          resolve('Email sent!')
        } else {
          reject(err.message)
        }
      })
    })

    
  try {
        // await transporter.sendMail({
        //   from: process.env.EMAIL_USER,
        //   to,
        //   subject,
        //   text,
        // });
        await mailPromise()
        return NextResponse.json({message: 'Email sent successfully!'})
        // console.log("Email sent successfully!");
      } catch (error) {
        // console.error("Error sending email:", error);
        // throw error;
        return NextResponse.json({error}, { status: 500})
      }
}
