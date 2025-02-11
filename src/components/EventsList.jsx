import Image from "next/image";
import React, { useState } from "react";
import UpdateEventForm from "./UpdateEventForm";
import { BeatLoader } from "react-spinners";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const EventsList = ({
  data,
  deleteHandler,
  showUpdateEventFormHandler,
  deleteLoading,
}) => {
  // console.log(data);
  return (
    <div className="w-full overflow-x-scroll">
      <table className="">
        <thead>
          <tr className="border">
            <th className=" w-max px-2 py-2 cursor-pointer flex items-center justify-between">
              S/N
            </th>
            <th className=" w-max px-2 py-2">Duration</th>
            <th className=" w-max px-2 py-2">Time</th>
            <th className=" w-max px-2 py-2">Title</th>
            <th className="w-max px-2 py-2">Facilitator</th>
            <th className="w-max px-2 py-2">Mode</th>
            <th className="w-max px-2 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="cursor-pointer text-sm md:text-base">
              <td className="border px-2 py-2 w-max ">{index}</td>
              <td className="border px-2 py-2 w-max ">{item?.duration}</td>
              <td className="border px-2 py-2 w-max ">{item?.time}</td>
              <td className="border px-2 py-2 w-max ">{item?.title}</td>
              <td className="border px-2 py-2 w-max ">{item?.facilitator}</td>
              <td className="border px-2 py-2 w-max ">{item?.mode}</td>
              <td className="border px-2 py-2 w-max flex gap-1">
                <div
                  className="px-2 py-1 bg-green-600 hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer"
                  onClick={() => showUpdateEventFormHandler(`${item._id}`)}
                >
                  <CiEdit />
                </div>

                <div
                  className="px-2 py-1 primaryBgColor hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer"
                  onClick={() => {
                    deleteHandler(`${item._id}`);
                  }}
                >
                  {deleteLoading ? (
                    <BeatLoader color="#fff" />
                  ) : (
                    <MdDeleteForever />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsList;
