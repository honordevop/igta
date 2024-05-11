import Image from "next/image";
import React from "react";

const ServicePageCard = ({ data }) => {
  return (
    <div className="w-full mb-24 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-20">
        {data?.map((service, i) => (
          <div
            className="flex trainingModal flex-col md:flex-row items-center justify-center gap-5 w-full h-max relative bg-[#eeeff30] border-[#e2e8f0] rounded-[16px]  shadow-md p-5"
            key={i}
          >
            <div className="flex-1 h-[400px] w-full relative md:h-[50vh]">
              <Image
                src={service.image}
                alt={`${service.title} service image`}
                fill={true}
                priority
                className="object-cover imgControlMobile"
              />
            </div>

            <div className="flex-1 px-6 h-full flex flex-col gap-5">
              <p className="text-2xl  font-semibold">{service.title}</p>
              <p className="text-gray-500 text-lg">{service.sub}</p>
              <p className="text-gray-500 text-lg">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePageCard;
