// import { cardDetails } from "@/Utils/store";
import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { SiOnlyoffice } from "react-icons/si";
import { VscFolderActive } from "react-icons/vsc";

const Card = ({ profileData }) => {
  const items = [
    {
      title: "Status",
      value: profileData?.data.status,
      icon: <VscFolderActive />,
    },
    {
      title: "Department",
      value: profileData?.data.department,
      icon: <RiBuilding2Line />,
    },
    {
      title: "Staff ID",
      value: profileData?.data.staffId,
      icon: <FaRegIdBadge />,
    },
    {
      title: "Line Manager",
      value: profileData?.data.lineManager,
      icon: <SiOnlyoffice />,
    },
    {
      title: "Email",
      value: profileData?.data.workEmail,
      icon: <MdOutlineLocalPostOffice />,
    },
  ];

  return (
    <div className=" flex gap-8 flex-wrap text-[#6B7281] mt-10 items-center">
      {items.map((item, i) => (
        <div
          key={i}
          className=" flex gap-7 border border-gray-300 w-[22rem] p-2 rounded-md cursor-pointer"
        >
          <div className="p-2 h-max text-5xl bg-pink-500 rounded-md text-white">
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
