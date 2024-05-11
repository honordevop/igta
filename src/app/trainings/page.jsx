import PageHeader from "@/components/PageHeader";
import TrainingModal from "@/components/TrainingModal";
import { trainingModule } from "@/utils/store";
import React from "react";

const Trainings = () => {
  return (
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
            students, whether it's through our certification programmes that are
            guided by the SDGs or our sustainability-focused courses.
          </p>
        </div>

        <TrainingModal data={trainingModule} />
      </div>
    </div>
  );
};

export default Trainings;
