import { NextResponse } from "next/server";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";
import connect from "@/Utils/db";
import Otps from "@/models/Otps";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    if (email === process.env.NEXT_PUBLIC_MAIL_CHECK) {
      const users = await Users.find();

      return NextResponse.json({ users }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }

  return NextResponse.json({ message: "Unauthorised access" }, { status: 401 });
};

// export const PATCH = async (request) => {
//   const { email, password } = await request.json();

//   const hashedPassword = await bcrypt.hash(password, 5);

//   await connect();

//   const user = await Users.findOne({ email });

//   // if (otpExist.otp !== otp) {
//   //   return NextResponse.json({ message: "Invalid OTP Code" }, { status: 401 });
//   // }

//   // console.log(user.password);
//   //fetch
//   if (user) {
//     try {
//       const hashedPassword = await bcrypt.hash(password, 5);
//       await Users.findOneAndUpdate(
//         { email: email },
//         { password: hashedPassword }
//       );

//       return NextResponse.json(
//         { message: "Password Changed succesfully" },
//         { status: 201 }
//       );
//     } catch (error) {
//       return NextResponse.json({ message: "Database Error" }, { status: 500 });
//     }
//   } else {
//     return new NextResponse("User not found", { status: 404 });
//   }
// };
