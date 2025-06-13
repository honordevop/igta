"use client"; // <-- make this a client component now
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotePageCard from "@/components/NotePageCard";
import PageHeader from "@/components/PageHeader";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 20; // items per page

  const fetchEventData = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/note?page=${page}&limit=${limit}`, {
        cache: "no-store", // no caching, always fresh
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      setNotes(data.notes || []);
      setTotalPages(data.totalPages || 1);
      setCurrentPage(data.currentPage || 1);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch notes on mount and whenever currentPage changes
  useEffect(() => {
    fetchEventData(currentPage);
  }, [currentPage]);

  // Sort notes by createdAt desc (optional since API already sorts)
  const sortedNotes = notes.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

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

          {loading ? (
            <p>Loading notes...</p>
          ) : (
            <NotePageCard data={sortedNotes} />
          )}

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 my-10">
            <button
              disabled={currentPage <= 1 || loading}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage >= totalPages || loading}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
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
