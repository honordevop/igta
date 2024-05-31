import connect from "@/Utils/db";
import Otps from "@/models/Otps";
import Users from "@/models/Users";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const requestData = await request.json();
  const { email } = requestData;
  // console.log(email);
  const otpGenerate = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const otp = otpGenerate();
  //fetch
  const newOtp = new Otps({ email, otp });
  try {
    await connect();

    const user = await Users.findOne({
      email: email,
    });

    const otpExist = await Otps.findOne({
      email: email,
    });

    if (!user) {
      return NextResponse.json(
        { message: "Email not Registered" },
        { status: 401 }
      );
    }

    // Update or save new OTP
    if (otpExist) {
      await Otps.findOneAndUpdate({ email: email }, { otp: otp });
      // console.log("Updated existing OTP");
    } else {
      const newOtp = new Otps({ email, otp });
      await newOtp.save();
      // console.log("Saved new OTP");
    }

    const transporter = nodemailer.createTransport({
      //   service: "ornorit.com.ng:2096",
      host: "mail.ornorit.com.ng",
      port: 465,
      secure: true,
      auth: {
        user: "info@ornorit.com.ng",
        pass: process.env.PASSWORD,
      },
    });

    const mailOption = {
      from: "info@ornorit.com.ng",
      to: `${email}`,
      subject: "Account Password Recovery - IGTA",
      html: `
        <h3>Hello!!!</h3>
        <h4> Use this OTP code to complete your password recovery process - OTP Code: ${otp}</h4> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "OTP Code Sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
