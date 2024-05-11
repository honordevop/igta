import Image from "next/image";
import React from "react";

const AboutPageCard = ({ data }) => {
  return (
    <div className="w-full mb-24 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-20">
        {/* {data?.map((data, i) => ( */}
        <div
          className="flex trainingModal flex-col md:flex-row justify-center gap-5 w-full h-max relative bg-[#eeeff30]  rounded-[16px]  md:p-5"
          // key={i}
        >
          <div className="flex-1 h-[300px] w-full relative md:h-[100vh]">
            <Image
              src={data.image}
              alt={`${data.title} image`}
              fill={true}
              priority
              className="object-cover imgControlMobile"
            />
          </div>

          <div className="flex-1 px-3 md:px-6 h-full flex flex-col gap-5">
            <p className="text-2xl  font-semibold">
              {data.title} <span className="primaryColor">{data.sub}</span>
            </p>

            <p className=" text-lg">{data.desc}</p>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default AboutPageCard;
