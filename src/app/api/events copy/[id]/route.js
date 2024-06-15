import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Events from "@/models/Events";

export async function GET(request, { params }) {
  const { id } = params;
  // const body = await request.json();

  //fetch
  try {
    await connect();

    const event = await Events.findById(id);

    return NextResponse.json({ event }, { status: 200 });
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

    await Events.findByIdAndUpdate(id, body);

    return NextResponse.json({ message: "Event Updated" }, { status: 201 });
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

    await Events.findByIdAndDelete(id);

    return NextResponse.json({ message: "Event deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
