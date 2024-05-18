import Event from "@/components/Event";
import PageHeader from "@/components/PageHeader";
import React from "react";

const Events = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="Ongoing Events & Trainings Activities" />

      <div className="w-full my-20 text-center flex flex-col gap-4 items-center justify-center ">
        <h3 className="text-4xl font-bold mb-12 px-2">
          Outline below are the current and ongoing trainings
        </h3>

        <Event />
      </div>
    </div>
  );
};

export default Events;
