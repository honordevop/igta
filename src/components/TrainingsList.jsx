import Image from "next/image";
import React, { useState } from "react";
import UpdateEventForm from "./UpdateEventForm";
import { BeatLoader } from "react-spinners";

const TrainingsList = ({
  data,
  deleteHandler,
  showUpdateEventFormHandler,
  deleteLoading,
}) => {
  // console.log(data);
  return (
    <div className="w-full overflow-x-scroll">
      <table className=" text-nowrap ">
        <thead>
          <tr className="border">
            <th className=" w-max px-2 py-2 cursor-pointer flex items-center justify-between">
              S/N
            </th>
            <th className=" w-max px-2 py-2">Title</th>
            <th className=" w-max px-2 py-2">Category</th>
            <th className=" w-max px-2 py-2 overflow-hidden">Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="cursor-pointer text-sm md:text-base">
              <td className="border px-2 py-2 w-max ">{index}</td>
              <td className="border px-2 py-2 w-max ">{item?.title}</td>
              <td className="border px-2 py-2 w-max ">{item?.category}</td>
              <td className="border px-2 py-2 w-max overflow-hidden">
                {item?.desc.slice(0, 50)}
              </td>
              {/* <td className="border px-2 py-2 w-max ">{item?.facilitator}</td>
              <td className="border px-2 py-2 w-max ">{item?.mode}</td> */}
              <td className="border px-2 py-2 w-max flex gap-1">
                <div
                  className="px-2 py-1 bg-green-600 hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer"
                  onClick={() => showUpdateEventFormHandler(`${item._id}`)}
                >
                  Update
                </div>

                <div
                  className="px-2 py-1 primaryBgColor hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer"
                  onClick={() => {
                    deleteHandler(`${item._id}`);
                  }}
                >
                  {deleteLoading ? <BeatLoader color="#fff" /> : <p>Delete</p>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainingsList;
