import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotePageCard from "@/components/NotePageCard";
import PageHeader from "@/components/PageHeader";
import ServicePageCard from "@/components/ServicePageCard";
import TrainingModal from "@/components/TrainingModal";
import { servicesData } from "@/Utils/store";
import React from "react";

const Notes = async () => {
  const fetchWithCacheBust = (url, options = {}) => {
    const cacheBustUrl = `${url}?_=${new Date().getTime()}`; // Add cache-busting query parameter
    return fetch(cacheBustUrl, {
      ...options, // Spread existing options
    });
  };

  // const fetchEventData = async () => {
  //   // console.log(baseUrl);
  //   // setLoading(true);
  //   try {
  //     const response = await fetch(
  //       "http://localhost:3000/api/note",
  //       {
  //         headers: {
  //           "Cache-Control": "no-cache", // Cache for 5 minutes (300 seconds)
  //           'Pragma': 'no-cache',
  //           'Expires': '0',
  //         },
  //       }
  //     );

  //     const res = await response.json();

  //     // const data = res.trainings;
  //     // setTrainingList(res.event);
  //     // console.log(res.trainings);
  //     // setTimeout(() => {
  //     //   setLoading(false);
  //     // }, 2000);
  //     // console.log(res.trainings);
  //     return res.notes;
  //   } catch (error) {
  //     // setError(error?.response);
  //     // setLoading(false);
  //     // toast(error?.message);

  //     console.log(error);
  //   }
  // };

  const fetchEventData = async () => {
    // setLoading(true); // Uncomment if you want to set loading state
    try {
      const response = await fetchWithCacheBust(
        `https://igtainternational.org/api/note`,
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
      // console.log(res.notes)
      return res.notes;
    } catch (error) {
      // Handle the error
      console.log(error);
      // Optionally, set error state or show a toast message
    } finally {
      // setLoading(false); // Uncomment if you want to set loading state
    }
  };

  const data = await fetchEventData();
  const sortedData = data?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  // console.log(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <PageHeader title="Classroom" />
        <div className="container">
          <div className="w-full my-20 text-center flex flex-col gap-4 items-center justify-center">
            <h3 className="text-4xl font-bold">
              Independent and Undenied access to Training Notes and Course
              Materials
            </h3>
            <p className="text-xl">
              IGTA provides undenied access to training materials and study
              guides for all our courses and trainings. The goal is to ensure
              that student can consult this notes and materials for refrences
              and further studies.
            </p>
          </div>

          <NotePageCard data={sortedData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notes;
