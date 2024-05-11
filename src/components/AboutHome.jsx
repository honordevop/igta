import Button from "@/UI/Button";
import Image from "next/image";
import React from "react";

const AboutHome = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex-1 flex flex-col gap-5 leading-[30px] px-[1.25rem]  py-10 md:pl-[8rem] text-justify">
          <h1 className="text-3xl font-semibold py-1 border-b-2 border-b-[#b52624] w-max">
            About IGTA
          </h1>
          <p>
            IGTA began when renowed educator Justice Nji Christain Anyafor had a
            revolutionary idea to offer a plaform that brings individuals
            seeking for carreer growth knowledge and professionals ready to
            mentor adn training talents together for free. The mission is to
            create and internationally accessible plaform that provides training
            and resources to empowers everyone from any part of the world
            sutainable and affordably. Over 5,000 students in more than 20
            countries trained, with continuous demand of a new and easily
            accessible way to deliver education adn trainings. This revelation
            sparked a mission to make lifelong learning more equitable and
            inclusive. We have consistently implemented different trainings that
            spans accross individual personal development and organization
            career advancement.
          </p>
          <Button link="/about" title="Learn More" />
        </div>
        <div className="flex-1 ">
          <div className="relative w-full h-[40vh] md:h-[90vh]">
            <Image
              src="/divinetechygirl.jpg"
              alt="image of students learning"
              // objectFit="cover"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
