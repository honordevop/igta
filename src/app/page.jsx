import AboutHome from "@/components/AboutHome";
import DiplomaHome from "@/components/DiplomaHome";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import ServicesHome from "@/components/ServicesHome";
import Trainings from "@/components/Trainings";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="container mt-[90px]">
        <Hero />
      </div>
      <div className="w-full my-10 bg-[#f4efee]">
        <AboutHome />
      </div>
      <Trainings />
      <ServicesHome />
      <DiplomaHome />
    </div>
  );
}
