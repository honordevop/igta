import Image from "next/image";
import React from "react";

const EventCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center  ">
      <div className="flex w-[80%] border-gray-200 border">
        <div className="flex-1 h-[50vh] w-full ">
          <Image
            src="/eventimage.jpg"
            fill
            className="object-fill"
            alt="event image"
          />
        </div>
        <div className="flex-1 p-5 md:pt-0 flex flex-col gap-2">
          <p className="text-xl font-bold">International Photography Course</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            vero rem error voluptas. Minima eligendi error soluta tempore
            tempora porro fugit id repellat quas ullam, at veritatis, iure
            officia a?
          </p>

          <p className="font-bold">
            Date: <span className="pl-5">24th May, 2024</span>
          </p>
          <p className="font-bold">
            Time: <span className="pl-5">24th May, 2024</span>
          </p>

          <p className="font-bold">
            Facilitator: <span className="pl-5">PhotoScene Studio</span>
          </p>

          <p className="font-bold">
            Mode: <span className="pl-5">Virtual</span>
          </p>

          <p className="font-bold">
            Link: <span className="pl-5">meet.google.com/QWAESAS</span>
          </p>

          <button className="w-full bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
