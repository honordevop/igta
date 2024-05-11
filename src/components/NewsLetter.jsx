"use client";
import React from "react";

const NewsLetter = () => {
  const handleNewsLetterSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex flex-col items-center justify-center my-28">
      <div className="container h-max md:h-[30vh] ">
        <div className="w-full  flex flex-col md:flex-row items-center justify-center h-max md:h-[30vh] shadow-2xl">
          <div
            className="flex-1 h-full"
            style={{
              backgroundImage: `url(/buildingdraw.png)`,
              backgroundColor: "#d92525",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              // width: "100%",
              // height: "300px", // Adjust height as needed
            }}
          ></div>

          <div
            className="flex2 h-full flex flex-col items-center justify-center gap-5 p-5"
            style={{
              backgroundImage: `url(/brushstrokeredvert.png)`,
              backgroundSize: "100px",
              backgroundRepeat: "repeat-y",
              backgroundPositionY: "center",
              backgroundPosition: "left",
              // width: "100%",
              // height: "300px", // Adjust height as needed
            }}
          >
            <p className=" text-2xl">Newsletter</p>
            <p className=" font-semibold text-center">
              GET UPDATES, STORIES, AND PRACTICAL INFORMATION DELIVERED STRAIGHT
              TO YOUR INBOX.
            </p>
            <form
              action=""
              onSubmit={handleNewsLetterSignUp}
              className="flex flex-col md:flex-row gap-5 w-full items-center justify-center"
            >
              <input
                type="text"
                className="bg-red-300 h-9 rounded-lg outline-none text-white p-3 w-[60%] placeholder-white"
                placeholder="Input your Email..."
              />
              <button className="w-max font-semibold primaryBgColor text-white px-4 py-1 rounded-md">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
