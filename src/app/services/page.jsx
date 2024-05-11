import PageHeader from "@/components/PageHeader";
import ServicePageCard from "@/components/ServicePageCard";
import TrainingModal from "@/components/TrainingModal";
import { servicesData } from "@/utils/store";
import React from "react";

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <PageHeader title="Services" />
      <div className="container">
        <div className="w-full my-20 text-center flex flex-col gap-4 items-center justify-center">
          <h3 className="text-4xl font-bold">
            We assist organisations in designing and implementing programmes
            aimed at enhancing their institutional capacity development.
          </h3>
          <p className="text-xl">
            As your full-fledged partner for innovation, education, and capacity
            building, we support you in creating long-lasting solutions that
            advance fairness and decent work environment.
          </p>
        </div>

        <ServicePageCard data={servicesData} />
      </div>
    </div>
  );
};

export default Services;
