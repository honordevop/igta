import { NextResponse } from "next/server";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";
import connect from "@/Utils/db";
import Otps from "@/models/Otps";

export const POST = async (request) => {
  const { email, otp } = await request.json();

  try {
    await connect();

    const otpExist = await Otps.findOne({ email });

    if (otpExist.otp !== otp) {
      return NextResponse.json(
        { message: "Invalid OTP Code" },
        { status: 401 }
      );
    }

    // console.log(user.password);
    //fetch
    if (otpExist.otp === otp) {
      return NextResponse.json(
        { message: "Verification Successful" },
        { status: 200 }
      );
    }
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 404 });
  }
};
