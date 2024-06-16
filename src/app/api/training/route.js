import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Trainings from "@/models/Trainings";

export const GET = async (request) => {
  // const url = new URL(request.url);

  // const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    const trainings = await Trainings.find();
    return NextResponse.json({ trainings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  // console.log(body);

  //fetch
  try {
    await connect();
    const newEvent = new Trainings(body);

    await newEvent.save();

    return NextResponse.json(
      { message: "Training has been created" },
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
