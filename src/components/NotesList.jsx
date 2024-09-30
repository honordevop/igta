"use client";
import Image from "next/image";
import React, { useState } from "react";
import DOMPurify from 'dompurify';
import { CiEdit } from "react-icons/ci";
import { BeatLoader } from "react-spinners";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const NotesList = ({
  data,
  deleteHandler,
  displayNoteHandler,
  showUpdateEventFormHandler,
  deleteLoading,
  displayLoading,
}) => {


  const truncateHTML = (html, maxLength) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
  
    let text = tempDiv.innerText;
  
    // If the text exceeds the maxLength, truncate it
    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + '...';
    }
  
    // Return the truncated HTML content
    const truncatedHtml = tempDiv.innerHTML.substring(0, maxLength);
    return truncatedHtml + (text.length > maxLength ? '...' : '');
  };

  // console.log(data);
  return (
    <div className="w-full overflow-x-scroll">
      <table className="">
        <thead>
          <tr className="border">
            <th className=" w-max px-2 py-2 cursor-pointer flex items-center justify-between">
              S/N
            </th>
            <th className=" w-max px-2 py-2">Title</th>
            <th className=" w-max px-2 py-2">Course</th>
            <th className=" w-max px-2 py-2 overflow-hidden">Content</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => { 
            const sanitizedContent = DOMPurify.sanitize(item?.content);
          const previewContent = truncateHTML(sanitizedContent, 50);

            return (
            <tr key={index} className="cursor-pointer text-sm md:text-base">
              <td className="border px-2 py-2 w-max ">{index}</td>
              <td className="border px-2 py-2 w-max ">{item?.title}</td>
              <td className="border px-2 py-2 w-max ">{item?.course}</td>
              <td className="border px-2 py-2 w-max overflow-hidden" dangerouslySetInnerHTML={{ __html: previewContent }}/>
              {/* <div className="text-lg" dangerouslySetInnerHTML={{ __html: previewContent }} /> */}
              {/* <td className="border px-2 py-2 w-max ">{item?.facilitator}</td>
              <td className="border px-2 py-2 w-max ">{item?.mode}</td> */}
              <td className="border px-2 py-2 w-max flex gap-1">
                <div
                  className="px-2 py-1 bg-green-600 hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer flex items-center justify-center"
                  onClick={() => showUpdateEventFormHandler(`${item._id}`)}
                >
                  <CiEdit />
                </div>

                <div
                  className="px-2 py-1 bg-blue-700 hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer flex items-center justify-center"
                  onClick={() => {
                    displayNoteHandler(`${item._id}`, !item.show);
                  }}
                >
                  {displayLoading ? (
                    <BeatLoader color="#fff" />
                  ) : ( <>
                    {item.show === true ? <FaRegEye /> : <FaEyeSlash />}</>
                  )}
                </div>

                <div
                  className="px-2 py-1 primaryBgColor hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer flex items-center justify-center"
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
          )})}
        </tbody>
      </table>
    </div>
  );
};

export default NotesList;
