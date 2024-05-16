"use client";

import { userTabsLink } from "@/utils/store";
import Link from "next/link";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const Tabs = ({ currentPage }) => {
  //   console.log(currentPage);

  return (
    <div className="w-full h-full secondaryBgColor overflow-y-scroll hideScrollBar">
      <ul className="flex flex-col gap-5 pt-[6rem]">
        {userTabsLink.map((link, i) => (
          <Link
            href={link.link}
            shallow
            key={i}
            style={
              link.slug == currentPage
                ? { backgroundColor: "#562345" }
                : { backgroundColor: "transparent" }
            }
            className="pl-6 pr-2 py-4"
          >
            <div className="flex gap-5 items-center">
              <div className=" text-lg p-2 border border-white rounded-md text-white">
                {link.icon}
              </div>
              <p className=" text-white text-lg font-bold text-nowrap">
                {link.title}{" "}
              </p>
            </div>
          </Link>
        ))}
        <div
          style={{ backgroundColor: "transparent" }}
          className="pl-6 pr-2 py-4"
          onClick={() => {
            handlePageLoading();
            logOutHandler();
          }}
        >
          <div className="flex gap-5 items-center cursor-pointer">
            <div className=" text-lg p-2 border border-white rounded-md text-white">
              <HiOutlineLogout />
            </div>
            <p className=" text-white text-lg font-bold text-nowrap">Log Out</p>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Tabs;
