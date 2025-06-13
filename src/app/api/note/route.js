import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Notes from "@/models/Notes";

export const GET = async (request) => {
  try {
    await connect();

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Get total count of notes
    const totalCount = await Notes.countDocuments();

    // Get paginated notes sorted by createdAt descending (most recent first)
    const notes = await Notes.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      notes,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    });
  } catch (error) {
    console.log(error);
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
