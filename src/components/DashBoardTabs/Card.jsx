// import { cardDetails } from "@/Utils/store";
import React from "react";
import { FaUserTie } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { RiBuilding2Line } from "react-icons/ri";
import { SiOnlyoffice } from "react-icons/si";
import { VscFolderActive } from "react-icons/vsc";

const Card = ({ profileData }) => {
  const items = [
    {
      title: "Status",
      value: "Active",
      icon: <VscFolderActive />,
    },
    {
      title: "Designation",
      value: profileData?.designation,
      icon: <RiBuilding2Line />,
    },
    {
      title: "Country",
      value: profileData?.country,
      icon: <GiWorld />,
    },
    {
      title: "Occupation",
      value: profileData?.occupation,
      icon: <FaUserTie />,
    },
    // {
    //   title: "Email",
    //   value: profileData?.data.workEmail,
    //   icon: <MdOutlineLocalPostOffice />,
    // },
  ];

  return (
    <div className=" flex gap-8 flex-wrap text-[#6B7281] mt-10 items-center">
      {items?.map((item, i) => (
        <div
          key={i}
          className=" flex gap-7 border border-gray-300 w-[22rem] p-2 rounded-md cursor-pointer"
        >
          <div className="p-2 h-max text-5xl primaryBgColor rounded-md text-white">
            {item.icon}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold">{item.title} </p>
            <p className="font-bold text-wrap">{item.value} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
