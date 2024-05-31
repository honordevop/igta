"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BeatLoader } from "react-spinners";

const ProfilePanel = ({ profileData }) => {
  //   console.log(profileData);
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState(profileData);
  // console.log(data);
  return (
    <div>
      <form className="my-8 text-sm">
        <div>
          {profileData?.image && (
            <Image
              alt="profile image"
              src={profileData?.image}
              height={150}
              width={150}
              className="rounded-[50%]"
            />
          )}
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Fullname
          </label>
          <input
            type="text"
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
            placeholder="Enter your Fullname"
            readOnly
            value={profileData?.fullname}
          ></input>
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
            placeholder="Email Address"
            readOnly
            value={profileData?.email}
          />
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Gender
          </label>
          <input
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
            readOnly
            value={profileData?.gender}
          ></input>
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Mobile Number
          </label>
          <input
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
            readOnly
            value={profileData?.mobilenumber}
          ></input>
        </div>

        <div className="">
          <label htmlFor="" className="font-bold">
            Occupation
          </label>
          <div className="w-full flex flex-row border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-0  rounded">
            <input
              type="text"
              className="w-[70%] p-2  focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
              readOnly
              value={profileData?.occupation}
            ></input>
          </div>
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Designation
          </label>
          <input
            type="text"
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
            readOnly
            value={profileData?.designation}
          ></input>
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Country
          </label>
          <input
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
            readOnly
            value={profileData?.country}
          ></input>
        </div>

        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Registered On
          </label>
          <input
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 cursor-pointer"
            readOnly
            value={profileData?.createdAt}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default ProfilePanel;
