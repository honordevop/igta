import AboutPageCard from "@/components/AboutPageCard";
import AboutPageLogo from "@/components/AboutPageLogo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { aboutData } from "@/Utils/store";
import React from "react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <PageHeader title="About Us" />
        <div className="w-full my-20 text-center flex flex-col gap-4 items-center justify-center">
          <h3 className="text-4xl font-bold">We turn talent into greatness.</h3>
          <p className="text-xl">
            IGTA changes lives, organizations, and nations through digital
            upskilling, developing the edge you need to conquer what's next.
          </p>
        </div>

        <div className="container">
          <AboutPageCard data={aboutData[0]} />
        </div>
        <AboutPageLogo />
        <div className="container">
          <AboutPageCard data={aboutData[1]} />
        </div>

        <div className="w-full flex flex-col items-center justify-center bg-gray-100 py-10">
          <div className="container">
            <div className="w-full flex gap-8 items-center justify-center flex-wrap">
              <h3 className="text-2xl font-bold">
                At IGTA, we are forging futures of
                <span className="primaryColor">
                  professionalism and equitable workplace
                </span>
              </h3>
              <p className="text-lg text-center">
                We are delivering impactful and cutting edge training and
                capacity development education that enables individuals and
                organizations to unlock their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
