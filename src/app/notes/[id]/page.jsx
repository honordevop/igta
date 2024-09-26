"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Note from "@/components/Note";
import NotePageCard from "@/components/NotePageCard";
import PageHeader from "@/components/PageHeader";
import ServicePageCard from "@/components/ServicePageCard";
import TrainingModal from "@/components/TrainingModal";
import { servicesData } from "@/Utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const Notes = ({ params }) => {
  const { data: session, status } = useSession();
  const { id } = params;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchWithCacheBust = (url, options = {}) => {
    const cacheBustUrl = `${url}?_=${new Date().getTime()}`; // Add cache-busting query parameter
    return fetch(cacheBustUrl, {
      ...options, // Spread existing options
    });
  };

  const fetchEventData = async () => {
    // setLoading(true); // Uncomment if you want to set loading state
    try {
      const response = await fetchWithCacheBust(
        `https://igtainternational.org/api/note/${id}`,
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const res = await response.json();
      // Return the notes data
      setData(res.note);
      setLoading(false);
      return res.note;
    } catch (error) {
      // Handle the error
      console.log(error);
      // Optionally, set error state or show a toast message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [id]);

  // const data = fetchEventData();

  //   const res = await fetch(`http://localhost:3000/api/note/${id}`, {
  //     cache: 'no-store', // Avoid caching for fresh data
  // });

  // if (!res.ok) {
  //     notFound(); // Handle 404 if post is not found
  // }

  // console.log(status);
  // console.log(data);

  // if (loading) {
  //   return (
  //     <div className="w-full h-[40vh] flex items-center justify-center">
  //       <div>
  //         <BounceLoader className="" size={80} color="#b52624" />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <>
        {!loading ? (
          <div className="w-full flex flex-col items-center justify-center">
            <PageHeader title="Notes" />
            {status === "authenticated" ? (
              <div className="container">
                <div className="w-full my-10 text-center flex flex-col gap-4 items-center justify-center">
                  <h3 className="text-4xl font-bold">{data?.course} Course</h3>
                </div>

                <Note data={data} />
              </div>
            ) : (
              <div className="container">
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
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-[40vh] flex items-center justify-center mt-28">
            <div>
              <BounceLoader className="" size={80} color="#b52624" />
            </div>
          </div>
        )}
      </>
      <Footer />
    </>
  );
};

export default Notes;
