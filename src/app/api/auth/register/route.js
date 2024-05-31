import Users from "@/models/Users";
import connect from "@/Utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const {
    fullname,
    email,
    gender,
    password,
    designation,
    country,
    occupation,
    mobilenumber,
  } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new Users({
    fullname,
    email,
    designation,
    country,
    gender,
    occupation,
    mobilenumber,
    password: hashedPassword,
  });

  try {
    const user = await Users.findOne({
      email: email,
    });
    if (user) {
      return NextResponse.json(
        { message: "Account already exist" },
        { status: 500 }
      );
    }
    await newUser.save();
    return NextResponse.json({ message: "Account Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
};

export const GET = async (request) => {
  const url = new URL(request.url);

  //fetch
  try {
    await connect();

    const users = await Users.find();

    // (username && { username }))
    // .reverse()
    // .slice(0, 4);

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
