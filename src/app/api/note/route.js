import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Notes from "@/models/Notes";

export const GET = async (request) => {
  // const url = new URL(request.url);

  // const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    const notes = await Notes.find();
    return NextResponse.json({ notes }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  // console.log(body);

  //fetch
  try {
    await connect();
    const newNote = new Notes(body);

    await newNote.save();

    return NextResponse.json(
      { message: "Note has been created" },
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
