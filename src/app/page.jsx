import AboutHome from "@/components/AboutHome";
import DiplomaHome from "@/components/DiplomaHome";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import ServicesHome from "@/components/ServicesHome";
import Team from "@/components/Team";
import Trainings from "@/components/Trainings";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="w-full flex flex-col items-center">
        <div className="container mt-[90px]">
          <Hero />
        </div>
        <div className="container bg-red-100 py-6 mt-16">
          <p className=" text-xl text-center font-bold ">
            The result of successful candidates that took the September 2024 IGTA NGO Management Training and examination has been released.
          </p>
          <Link
            href="/result"
            className="font-black text-lg primaryBgColor px-6 py-2 rounded-lg mt-12 text-white"
          >
            Check Results
          </Link>
        </div>
        <div className="w-full my-10 bg-[#f4efee]">
          <AboutHome />
        </div>
        <Trainings />
        {/* <div className="container">
        <Team />
      </div> */}
        <ServicesHome />
        <DiplomaHome />
      </div>
      <Footer />
    </>
  );
}
