import { results } from "@/Utils/store";
import React from "react";

const ResultList = () => {
  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full text-nowrap ">
        <thead>
          <tr>
            <th className=" w-max px-2 py-2 cursor-pointer flex items-center justify-between">
              S/N
            </th>
            <th className=" w-max px-4 py-2">NAME</th>
            <th className="px-4 py-2">SCORE</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((item, index) => (
            <tr key={index} className="cursor-pointer text-sm md:text-base">
              <td className="border px-2 py-2 w-max ">{index}</td>
              <td className="border px-2 py-2 w-max ">{item?.name}</td>
              <td className="border px-2 py-2 w-max ">{item?.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultList;
