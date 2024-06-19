// "use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TrainingModal from "@/components/TrainingModal";
// import { trainingModule } from "@/Utils/store";
import React from "react";
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((r) => r.json());

const Trainings = async () => {
  // const { data, error } = useSWR("/api/training", fetcher);

  // let data;

  const fetchEventData = async () => {
    // console.log(baseUrl);
    // setLoading(true);
    try {
      const response = await fetch(
        "https://igtainternational.org/api/training",
        {
          headers: {
            "Cache-Control": "max-age=300", // Cache for 5 minutes (300 seconds)
          },
        }
      );

      const res = await response.json();

      // const data = res.trainings;
      // setTrainingList(res.event);
      // console.log(res.trainings);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
      // console.log(res.trainings);
      return res.trainings;
    } catch (error) {
      // setError(error?.response);
      // setLoading(false);
      // toast(error?.message);

      console.log(error);
    }
  };

  const data = await fetchEventData();

  // console.log(data);

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <PageHeader title="Trainings" />
        <div className="container">
          <div className="w-full my-20 text-center flex flex-col gap-4 items-center justify-center">
            <h3 className="text-4xl font-bold">
              We prepare today’s learners for tomorrow’s world of work
            </h3>
            <p className="text-xl">
              Our goal is to give people access to digitally enhanced capacity
              building programmes so they can effectively handle current and
              future changes in their employment. We always prioritise our
              students, whether it's through our certification programmes that
              are guided by the SDGs or our sustainability-focused courses.
            </p>
          </div>

          <TrainingModal data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trainings;
