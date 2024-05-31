import { NextResponse } from "next/server";
import Events from "@/models/Events";
import connect from "@/Utils/db";

export const GET = async (request) => {
  // const url = new URL(request.url);

  // const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    const events = await Events.find();
    return NextResponse.json({ events }, { status: 200 });
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
    const newEvent = new Events(body);

    await newEvent.save();

    return NextResponse.json(
      { message: "Event has been created" },
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
