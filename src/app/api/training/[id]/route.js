import { NextResponse } from "next/server";
import connect from "@/Utils/db";
import Trainings from "@/models/Trainings";

export async function GET(request, { params }) {
  const { id } = params;
  // const body = await request.json();

  //fetch
  try {
    await connect();

    const event = await Trainings.findById(id);

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

    await Trainings.findByIdAndUpdate(id, body);

    return NextResponse.json({ message: "Training Updated" }, { status: 201 });
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

    await Trainings.findByIdAndDelete(id);

    return NextResponse.json({ message: "Training deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
