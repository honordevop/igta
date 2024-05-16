"use client";

import { teamsData } from "@/utils/store";
import Image from "next/image";
import { useEffect, useState } from "react";

const Team = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === teamsData.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(teamsData.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
        <div className=" bg-yellow-300">
          <p className="font-bold text-3xl">Our Teams</p>
        </div>
        <div
          className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
        >
          {teamsData.map((elem, idx) => (
            <div key={idx} className="bg-blue-600">
              <div
                className={`${
                  idx === activeImage
                    ? "relative block w-[200px] h-[50vh] object-contain transition-all duration-500 ease-in-out "
                    : "hidden"
                }`}
              >
                <Image
                  src={elem.img}
                  alt=""
                  fill
                  // width={400}
                  // height={400}
                  className="w-full h-full object-contain md:rounded-tl-3xl md:rounded-bl-3xl"
                />
              </div>
              <div
                className={`${
                  idx === activeImage
                    ? "flex flex-col w-full items-center justify-center py-4 bg-[#f6f6f6]"
                    : "hidden"
                }`}
              >
                <p className="font-bold text-xl text-center">{elem.name}</p>
                <p className="font-bold text-lg text-center">{elem.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      /> */}
      </main>
    </div>
  );
};

export default Team;
