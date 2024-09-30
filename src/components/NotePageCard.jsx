"use client";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from 'dompurify';
import React, { useEffect, useState } from "react";

const NotePageCard = ({ data }) => {
  const [sanitizedData, setSanitizedData] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && data) {
      const sanitized = data.map(note => ({
        ...note,
        content: DOMPurify.sanitize(note.content),
      }));
      setSanitizedData(sanitized);
    }
  }, [data]);

  const truncateHTML = (html, maxLength) => {
    
    if (typeof window === 'undefined') {
      return html; // or handle it some other way
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    let text = tempDiv.innerText;

    if (text.length > maxLength) {
      text = text.slice(0, maxLength) + '...';
    }

    const truncatedHtml = tempDiv.innerHTML.substring(0, maxLength);
    return truncatedHtml + (text.length > maxLength ? '...' : '');
  };

  return (
    <div className="w-full mb-24 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col gap-20">
        {sanitizedData.map((note, i) => {
          const previewContent = truncateHTML(note.content, 200);

          return (
            <div
              className="flex trainingModal flex-col md:flex-row items-center justify-center gap-5 w-full h-max relative bg-[#eeeff30] border-[#e2e8f0] rounded-[16px] shadow-md p-5"
              key={i}
            >
              {note?.image && (
                <div className="flex-1 h-[400px] w-full relative md:h-[50vh]">
                  <Image
                    src={note?.image}
                    alt={`${note?.title} note image`}
                    fill={true}
                    priority
                    className="object-cover imgControlMobile"
                  />
                </div>
              )}

              <div className="flex-1 px-6 h-full flex flex-col gap-5">
                <p className="text-2xl font-semibold">Title: {note?.title}</p>
                <p className="text-gray-500 text-lg font-semibold">
                  Course: {note?.course}
                </p>
                <div className="text-lg" dangerouslySetInnerHTML={{ __html: previewContent }} />

                <button className="w-max flex">
                  {note?.show ? (
                    <Link
                      href={`/notes/${note._id}`}
                      className="w-full font-black text-lg primaryBgColor px-6 py-2 rounded-lg text-white"
                    >
                      Read More
                    </Link>
                  ) : (
                    <div className="w-max font-black text-lg bg-gray-400 px-6 py-2 rounded-lg text-white">
                      Access Disabled by Admin
                    </div>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotePageCard;
