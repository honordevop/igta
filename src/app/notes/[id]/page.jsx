// "use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Note from "@/components/Note";
import NotePageCard from "@/components/NotePageCard";
import PageHeader from "@/components/PageHeader";
import ServicePageCard from "@/components/ServicePageCard";
import TrainingModal from "@/components/TrainingModal";
import { servicesData } from "@/Utils/store";
// import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BounceLoader } from "react-spinners";

const Notes = async ({ params }) => {
  const { id } = params;

  let loading;


  const fetchWithCacheBust = (url, options = {}) => {
    const cacheBustUrl = `${url}?_=${new Date().getTime()}`; // Add cache-busting query parameter
    return fetch(cacheBustUrl, {
      ...options, // Spread existing options
    });
  };

  const fetchEventData = async () => {
    // setLoading(true); // Uncomment if you want to set loading state
    const loading = true
    try {
      const response = await fetchWithCacheBust(
        `https://igtainternational.org/api/note/${id}`,
        {
          headers: {
            "Cache-Control": "public, max-age=0, must-revalidate",
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
      // setData(res.note);
      const loading = false
      return res.note;
    } catch (error) {
      // Handle the error
      console.log(error);
      // Optionally, set error state or show a toast message
    } finally {
      const loading = false
    }
  };


  const data = await fetchEventData();

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
            <PageHeader title="Classroom" />
            <div className="container">
              <Note data={data} />
            </div>
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
