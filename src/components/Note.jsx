"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Note = ({ data }) => {
  const { data: session, status } = useSession();
  // const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="container">
        {status === "authenticated" ? (
          <div className="w-full flex flex-col gap-5">
            <div className="w-full my-10 text-center flex flex-col gap-4 items-center justify-center">
              <h3 className="text-4xl font-bold">{data?.course} Course..</h3>
            </div>
            <h1 className="font-semibold text-2xl"> Title: {data?.title}</h1>

            {data?.image && (
              <div className="relative h-[60vh] w-[100%]">
                <Image
                  src={data?.image}
                  className="object-contain"
                  fill="true"
                  alt={`${data?.title} image`}
                />
              </div>
            )}

            <div className="mt-5">
              <p className="md:text-[18px]"> {data?.content} </p>
            </div>
          </div>
        ) : (
          <div className="w-full my-10 text-center flex flex-col md:flex-row gap-10 md:gap-4 items-center justify-center h-[50vh]">
            <div className="flex-1 w-full h-full">
              <div className="relative w-full h-full ">
                <Image
                  src="/denied.svg"
                  fill
                  priority
                  className="object-contain"
                  alt="sign up image"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-10 items-center md:items-start justify-center">
              <p className="text-[18px] font-black">
                You need to be logged in to access Note content
              </p>

              <Link
                href={`/auth`}
                className="w-max font-black text-lg primaryBgColor px-6 py-2 rounded-lg text-white"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Note;
