import Image from "next/image";
import Link from "next/link";
import React from "react";

const DiplomaHome = () => {
  return (
    <div className="w-full py-24 flex flex-col items-center justify-center border border-[#e2e8f0] bg-[#eeeff0]">
      <div className="container h-max ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full h-[100vh] md:h-[50vh] rounded relative">
          <div className="flex-1 h-[50vh] w-full relative md:h-full glass">
            <Image
              src="/diploma.jpg"
              alt="man's image"
              fill={true}
              priority
              className="object-cover rounded-[16px]"
            />
          </div>

          <div className="flex-1 px-6 py-5 h-full flex flex-col gap-5">
            <p className="text-4xl leading-[50px] ">
              CERTIFICATES AND DIPLOMAS
            </p>
            <p className="text-gray-500 text-lg">
              Complete IGTA courses to earn official certificates, diplomas, and
              credits that will move your career forward.
            </p>

            <Link href="#">
              <p className="primaryBgColor rounded-lg p-2 px-4 text-white font-semibold text-center w-max">
                Learn More
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaHome;
