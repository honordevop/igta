import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotePageCard = ({data}) => {

  return (
    <div className="w-full mb-24 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-20">
        {data?.map((note, i) => (
          <div
            className="flex trainingModal flex-col md:flex-row items-center justify-center gap-5 w-full h-max relative bg-[#eeeff30] border-[#e2e8f0] rounded-[16px]  shadow-md p-5"
            key={i}
          >
            {note?.image && <div className="flex-1 h-[400px] w-full relative md:h-[50vh]">
              <Image
                src={note?.image}
                alt={`${note?.title} note image`}
                fill={true}
                priority
                className="object-cover imgControlMobile"
              />
            </div>}

            <div className="flex-1 px-6 h-full flex flex-col gap-5">
              <p className="text-2xl  font-semibold">Title {note?.title}</p>
              <p className="text-gray-500 text-lg font-semibold">
                {" "}
                Course: {note?.course}
              </p>
              <p className=" text-lg">
                {note?.content.slice(0, 240)}...
              </p>

              <button className="w-max flex ">
                {note?.show ? 
                  <Link
                    href={`/notes/${note._id}`}
                    className="w-full font-black text-lg primaryBgColor px-6 py-2 rounded-lg text-white"
                  >
                    Read More
                  </Link>
                 : 
                  <div className="w-max font-black text-lg bg-gray-400 px-6 py-2 rounded-lg text-white">
                    Access Disabled by Admin
                  </div>
                }
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotePageCard;
