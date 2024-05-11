import Image from "next/image";
import React from "react";

const AboutPageLogo = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 py-10 mb-24">
      <div className="container">
        <div className="w-full flex gap-8 items-center justify-center flex-wrap">
          <div className=" relative w-[150px] h-[75px]">
            <Image src="/iec.png" fill className="object-contain" />
          </div>

          <div className=" relative w-[150px] h-[75px]">
            <Image src="/caclogo.png" fill className="object-contain" />
          </div>

          <div className=" relative w-[150px] h-[75px]">
            <Image
              src="/africatraininginstitute.png"
              fill
              className="object-contain"
            />
          </div>

          <div className=" relative w-[150px] h-[75px]">
            <Image src="/ilo.png" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageLogo;
