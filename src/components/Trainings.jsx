import Image from "next/image";
import React from "react";
import TrainingModules from "./TrainingModules";

const Trainings = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center mb-12 text-white py-8"
      style={{
        backgroundImage: `url(/backgroundImage.png)`,
        backgroundSize: "fill",
        backgroundPosition: "center",
        // width: "100%",
        // height: "300px", // Adjust height as needed
      }}
    >
      <div className="container flex flex-col items-center justify-center gap-8">
        <div className="w-[100px] h-[100px] relative">
          <Image src="/logo.png" alt="logo" fill priority />
        </div>

        <div className="w-full flex flex-col justify-center items-center text-center gap-5">
          <h1 className="font-black text-3xl">IGTA SCHOOL of DEVELOPMENT</h1>
          <p className="w-full md:w-[700px] text-2xl">
            We’re one of the only training institutions in the world that
            delivers free development-oriented training to improve nation's
            human capital Index (HDI).
          </p>
        </div>
        <TrainingModules />
      </div>
    </div>
  );
};

export default Trainings;
