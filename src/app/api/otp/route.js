import connect from "@/Utils/db";
import Otps from "@/models/Otps";
import Users from "@/models/Users";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const requestData = await request.json();
  const { email } = requestData;
  const otpGenerate = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const otp = otpGenerate();
  console.log(`${email} - ${otp}`);

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
      console.log("Updated existing OTP");
    } else {
      const newOtp = new Otps({ email, otp });
      await newOtp.save();
      // console.log("Saved new OTP");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "admin@igtainternational.org",
        pass: process.env.PASSWORD,
      },
    });


    const mailOption = {
      from: "admin@igtainternational.org",
      to: `${email}`,
      subject: "Account Password Recovery - IGTA",
      html: `
        <h3>Hello!!!</h3>
        <h4> Use this OTP code to complete your password recovery process - OTP Code: ${otp}</h4> 

        <h4>For further Enquiry, Please feel free to mail info@igtainternational.org </h4>

        <em style="font-weight: bold;"> This is a system generated email, Do not reply!!!</em>
        `,
    };


    const result = await transporter.sendMail(mailOption);

    // console.log("Email Sent: ", result);

    return NextResponse.json({ message: "OTP Code Sent" }, { status: 200 });
  } catch (error) {
  console.error("Error sending OTP email:", error);
  return NextResponse.json(
    { message: "Something went wrong", error: error.message },
    { status: 500 }
  );
}
};
