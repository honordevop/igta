"use client";

import { useGlobalContext } from "@/contextAPI/context";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const Tabs = ({ currentPage, tabLink }) => {
  //   console.log(currentPage);

  const { onPageLoading } = useGlobalContext();

  return (
    <div className="w-full h-full secondaryBgColor hideScrollBar">
      <ul className="flex flex-col gap-5 pt-[6rem]">
        {tabLink.map((link, i) => (
          <Link
            href={link.link}
            onClick={link.link.includes(currentPage) ? null : onPageLoading}
            shallow
            key={i}
            style={
              link.slug == currentPage
                ? { backgroundColor: "#8a2928" }
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
            onPageLoading();
            signOut();
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
