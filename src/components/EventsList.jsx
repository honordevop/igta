import Image from "next/image";
import React from "react";

const EventsList = ({ data }) => {
  return (
    <div className="w-full overflow-x-scroll">
      <table className=" text-nowrap ">
        <thead>
          <tr className="border">
            <th className=" w-max px-2 py-2 cursor-pointer flex items-center justify-between">
              S/N
            </th>
            <th className=" w-max px-2 py-2">Date</th>
            <th className=" w-max px-2 py-2">Time</th>
            <th className=" w-max px-2 py-2">Title</th>
            <th className="w-max px-2 py-2">Facilitator</th>
            <th className="w-max px-2 py-2">Mode</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="cursor-pointer text-sm md:text-base">
              <td className="border px-2 py-2 w-max ">{index}</td>
              <td className="border px-2 py-2 w-max ">
                {item?.date.slice(0, 10)}
              </td>
              <td className="border px-2 py-2 w-max ">{item?.time}</td>
              <td className="border px-2 py-2 w-max ">{item?.title}</td>
              <td className="border px-2 py-2 w-max ">{item?.facilitator}</td>
              <td className="border px-2 py-2 w-max ">{item?.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsList;
