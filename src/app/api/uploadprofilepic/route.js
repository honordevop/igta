import { NextResponse } from "next/server";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";
import connect from "@/Utils/db";

export const PATCH = async (request) => {
  const { email, image } = await request.json();

  await connect();

  const user = await Users.findOne({ email });

  // if (otpExist.otp !== otp) {
  //   return NextResponse.json({ message: "Invalid OTP Code" }, { status: 401 });
  // }

  // console.log(user.password);
  //fetch
  if (user) {
    try {
      await Users.findOneAndUpdate({ email: email }, { image: image });

      return NextResponse.json({ message: "Image Uploaded" }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: "Database Error" }, { status: 500 });
    }
  } else {
    return new NextResponse("User not found", { status: 404 });
  }
};
