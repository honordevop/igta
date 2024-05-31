import React from "react";
import Card from "./Card";

const DashBoardPannel = ({ profileData }) => {
  // console.log(profileData);
  return (
    <div className="">
      <div className=" flex flex-col items-center justify-center gap-4 my-8 ">
        <p className="text-xl font-bold text-center">
          Hi, {`${profileData?.fullname}`} - Welcome to IGTA Dashboard
        </p>
        <p className="text-[#6B7281] font-bold text-center">
          Always remember to start your day in an upward direction, and the rest
          of the day will follow the uphill path. <br />
          <em>~ Vernon Howard</em>
        </p>
      </div>
      <Card profileData={profileData} />
    </div>
  );
};

export default DashBoardPannel;
