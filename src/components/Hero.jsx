import { heroFeatures } from "@/Utils/store";
import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  h-[90vh] ">
      <div className="flex-1 flex flex-col gap-7 mt-[30px] md:mt-[60px] ">
        <p className="primaryBgColor px-4 py-1 rounded-2xl text-white w-max font-semibold tracking-[1.5px]">
          IGTA RN: 7312655
        </p>

        <h1 className="text-[40px] md:text-[55px] font-bold leading-[50px]  md:leading-[80px] font-sans">
          Insight Global Training Academy
        </h1>
        <div>
          {heroFeatures.map((item, i) => (
            <div key={i} className="flex gap-4 items-center">
              <IoMdCheckmarkCircleOutline className="primaryColor" />
              <p className="text-gray-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 ">
        <div className=" w-full h-[40vh] md:h-full mt-[20px] ">
          <Image
            src="/learning-bro.svg"
            alt="hero image"
            priority
            fill
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
