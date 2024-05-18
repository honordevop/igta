import Image from "next/image";
import React from "react";

const Event = () => {
  return (
    <div className="w-full text-left mb-24 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-20 container">
        <div className=" flex trainingModal flex-col md:flex-row  justify-center gap-5 w-full h-max relative bg-[#eeeff30] border-[#e2e8f0] rounded-[16px]  p-5">
          <div className="flex-1 h-[400px] w-full relative md:h-[50vh]">
            <Image
              src="/photoghraphy.jpg"
              alt={`photoghraphy training image`}
              fill={true}
              priority
              className="object-contain imgControlMobile"
            />
          </div>

          <div className="flex-1 px-6 h-full flex flex-col gap-5  items-start">
            <p className="text-3xl  font-semibold">INTERNATIONAL PHOTOGRAPHY</p>
            <p className="` text-lg">UNLEASHING CREATIVITY IN PHOTOGRAPHY</p>
            <p className=" text-lg">Duration: 13TH APRIL - 13TH AUGUST 2024</p>
          </div>
        </div>

        <div className=" flex trainingModal flex-col md:flex-row  justify-center gap-5 w-full h-max relative bg-[#eeeff30] border-[#e2e8f0] rounded-[16px]  p-5">
          <div className="flex-1 h-[400px] w-full relative md:h-[50vh]">
            <Image
              src="/cybersecuritytraining.jpg"
              alt={`cybersecurity training image`}
              fill={true}
              priority
              className="object-contain imgControlMobile"
            />
          </div>

          <div className="flex-1 px-6 h-full flex flex-col gap-5  items-start justify-start">
            <p className="text-3xl  font-semibold">
              6 Months Free Cybersecurity Training with CYBERHEROES
            </p>
            <p className="` text-lg">UNLEASHING CREATIVITY IN PHOTOGRAPHY</p>

            <ul className="w-full flex flex-col gap-3 list-inside list-disc items-start">
              {" "}
              <li>
                Participants will be trained on cyber security and ethical
                hacking, students will be open to free mentorship in
                cybersecurity during this 6 months of the training.
              </li>
              <li>
                Internship on real life cybersecurity jobs across the world with
                different organizations that are in the global space.
              </li>
              <li>
                At the end of the training, there will be job placement
                opportunity for all those that will be trainined.
              </li>
            </ul>
            <p className=" text-lg">
              Duration: 30TH MARCH - 30TH SEPTEMBER 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
