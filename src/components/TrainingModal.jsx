import Image from "next/image";
import React from "react";

const TrainingModal = ({ data }) => {
  return (
    <div className="w-full mb-24 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-20">
        {data?.map((training, i) => (
          <div
            className="flex trainingModal flex-col md:flex-row  justify-center gap-5 w-full h-max relative bg-[#eeeff30] border-[#e2e8f0] rounded-[16px] bg-[#eeeff0] p-5"
            key={i}
          >
            <div className="flex-1 h-[400px] w-full relative md:h-[50vh]">
              <Image
                src={training.image}
                alt={`${training.title} training image`}
                fill={true}
                priority
                className="object-cover imgControlMobile"
              />
            </div>

            <div className="flex-1 px-6 h-full flex flex-col gap-5">
              <p className="text-2xl  font-semibold">{training.title}</p>
              <p className="text-gray-500 text-lg">{training.desc}</p>

              {/* <Link href="#">
              <p className="primaryBgColor rounded-lg p-2 px-4 text-white font-semibold text-center w-max">
                Learn More
              </p>
            </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingModal;
