import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ResultList from "@/components/ResultList";
import React from "react";

const Results = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <PageHeader title="Candidate Results" />

        <div className="container my-20 text-center flex flex-col gap-4 items-center justify-center">
          <h3 className="text-4xl font-bold ">
            SUCCESSFUL CANDIDATES IN IGTA LOGISTICS AND PROCUREMENT EXAMS OF MAY
            2024.
          </h3>
          <p className="text-xl">
            123 Students Succeeded with a Minimum score of 50% Out of 200
            Students Who took the Examination. <br />
            Congratulations !!!
          </p>
        </div>

        <div className="container">
          <ResultList />
          <p className="text-xl my-4 ">
            Congratulations once more to all those who succeeded in the
            examinations while we encourage those who didn’t succeed to try
            again next year. Students are encouraged to forward all their
            complaints directly to the management of IGTA International via the
            organizations mailing addresses.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Results;
