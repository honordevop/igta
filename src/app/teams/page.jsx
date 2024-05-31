import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { teamsData } from "@/Utils/store";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <PageHeader title="Our Teams" />

        <div
          className={`w-full flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0 mt-[40px] md:mt-[80px]`}
        >
          {teamsData.map((elem, idx) => (
            <div key={idx} className="w-[250px]">
              <div className="relative w-full h-[45vh] md:h-[50vh] object-contain transition-all flex items-center duration-500 ease-in-out ">
                <Image
                  src={elem.img}
                  alt={elem.name}
                  fill
                  // width={400}
                  // height={400}
                  className="object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
                />
              </div>
              <div className="flex flex-col w-full items-center justify-center py-4 bg-[#f6f6f6]">
                <p className="font-bold text-xl text-center">{elem.name}</p>
                <p className="font-bold text-lg text-center">{elem.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* </main> */}
      </div>
      <Footer />
    </>
  );
};

export default Team;
