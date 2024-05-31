"use client";
import { trainingModule } from "@/Utils/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const TrainingModules = () => {
  const [slide, setSlide] = useState("");
  const next = () => {
    setSlide("400px");
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h3 className="font-black text-xl primaryBgColor px-4 py-2 rounded-xl">
        IGTA Training Modules
      </h3>

      <div
        className="w-full flex flex-col md:flex-row gap-5 mt-10 items-center justify-center"
        style={{ transform: `translateY(${slide}` }}
      >
        {trainingModule.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className="w-[350px] flex flex-col gap-5 rounded-md border-2 border-double text-blue-700 primaryColor h-max p-2 glassMorphism"
          >
            <div className="relative w-full h-[200px] rounded-[16px]">
              <Image
                src={item.image}
                alt={`${item.title} image`}
                fill
                // objectFit="fit"
                className="rounded-xl object-fit"
              />
            </div>

            <p className="border-1 border-[#f4efee] text-[12px] px-2 py-1  w-max glassMorphism rounded-xl primaryColor font-bold">
              {item.category}
            </p>

            <p className="font-black text-xl uppercase text-white">
              {item?.title}
            </p>
            <p>
              {`${item.desc.slice(0, 140)}...`}
              <span className="italic ml-4 hover:text-red-600 border-b border-b-red-600">
                <Link href="/trainings">read more</Link>
              </span>
            </p>

            <div>
              <p className="border-1 border-[#f4efee] px-2 py-1  w-max glassMorphism rounded-xl primaryColor font-bold">
                Mode: <span className="ml-2">{item?.mode} </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-5 items-center justify-center">
        <Link
          href="/trainings"
          className="w-max font-black text-lg primaryBgColor px-6 py-2 rounded-lg mt-12 flex gap-2 items-center justify-center"
        >
          View More Trainings{" "}
          <span>
            <FaRegArrowAltCircleRight className="text-white" />
          </span>
        </Link>

        <Link
          href="/events"
          className="w-max font-black text-lg primaryBgColor px-6 py-2 rounded-lg mt-6 md:mt-12 flex gap-2 items-center justify-center"
        >
          View Ongoing Trainings{" "}
          <span>
            <FaRegArrowAltCircleRight className="text-white" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TrainingModules;
