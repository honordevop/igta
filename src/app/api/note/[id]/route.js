import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Notes from "@/models/Notes";

export async function GET(request, { params }) {
  const { id } = params;
  // const body = await request.json();

  //fetch
  try {
    await connect();

    const note = await Notes.findById(id);

    return NextResponse.json({ note }, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const { id } = params;

  const body = await request.json();

  //fetch
  try {
    await connect();

    await Notes.findByIdAndUpdate(id, body);

    return NextResponse.json({ message: "Note Updated" }, { status: 201 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  //fetch
  const { id } = params;

  try {
    await connect();

    await Notes.findByIdAndDelete(id);

    return NextResponse.json({ message: "Note deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
