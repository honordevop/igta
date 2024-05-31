import Image from "next/image";
import React from "react";

const UsersList = ({ data }) => {
  return (
    <div className="w-full overflow-x-scroll">
      <table className=" text-nowrap ">
        <thead>
          <tr className="border">
            <th className=" w-max px-2 py-2 cursor-pointer flex items-center justify-between">
              S/N
            </th>
            <th className=" w-max px-2 py-2">Image</th>
            <th className=" w-max px-2 py-2">Name</th>
            <th className="w-max px-2 py-2">Email</th>
            <th className="w-max px-2 py-2">Country</th>
            <th className="w-max px-2 py-2">Occupation</th>
            <th className="w-max px-2 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="cursor-pointer text-sm md:text-base">
              <td className="border px-2 py-2 w-max ">{index}</td>
              <td className="border px-2 py-2 w-max ">
                <Image
                  src={item?.image}
                  alt={`${item?.fullname}`}
                  height={30}
                  width={30}
                  className="rounded-[50%]"
                />{" "}
              </td>
              <td className="border px-2 py-2 w-max ">{item?.fullname}</td>
              <td className="border px-2 py-2 w-max ">{item?.email}</td>
              <td className="border px-2 py-2 w-max ">{item?.country}</td>
              <td className="border px-2 py-2 w-max ">{item?.occupation}</td>
              <td className="border px-2 py-2 w-max ">{item?.mobilenumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
