import Button from "@/UI/Button";
import { aboutData } from "@/Utils/store";
import Image from "next/image";
import React from "react";

const AboutHome = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex-1 flex flex-col gap-5 leading-[30px] px-[1.25rem]  py-10 md:pl-[8rem] text-justify">
          <h1 className="text-3xl font-semibold py-1 border-b-2 border-b-[#b52624] w-max">
            About IGTA
          </h1>
          <p> {aboutData[0].desc}</p>
          <Button link="/about" title="Learn More" />
        </div>
        <div className="flex-1 ">
          <div className="relative w-full h-[40vh] md:h-[90vh]">
            <Image
              src="/divinetechygirl.jpg"
              alt="image of students learning"
              // objectFit="cover"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
