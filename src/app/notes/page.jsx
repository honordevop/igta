"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotePageCard from "@/components/NotePageCard";
import PageHeader from "@/components/PageHeader";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const Notes = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialPage = parseInt(searchParams.get("page") || "1");

  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 20;

  const fetchEventData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/note?page=${page}&limit=${limit}`, {
        cache: "no-store",
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setNotes(data.notes || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventData(currentPage);
  }, [currentPage]);

  // Update the URL query param when currentPage changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", currentPage.toString());
    router.push(`?${params.toString()}`);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center">
        <PageHeader title="Classroom" />
        <div className="container">
          <div className="w-full my-20 text-center flex flex-col gap-4 items-center justify-center">
            <h3 className="text-4xl font-bold">
              Independent and Undenied access to Training Notes and Course
              Materials
            </h3>
            <p className="text-xl">
              IGTA provides undenied access to training materials and study
              guides for all our courses and trainings. The goal is to ensure
              that students can consult these notes and materials for references
              and further studies.
            </p>
          </div>

          {loading ? <p>Loading notes...</p> : <NotePageCard data={notes} />}

          {/* Pagination */}
          <div className="flex justify-center gap-4 my-10">
            <button
              disabled={currentPage <= 1 || loading}
              onClick={handlePrev}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage >= totalPages || loading}
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notes;
