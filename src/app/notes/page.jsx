"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NotePageCard from "@/components/NotePageCard";
import PageHeader from "@/components/PageHeader";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Notes = () => {
  const router = useRouter();

  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 10;

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
      setCurrentPage(data.currentPage || 1);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Use native window.location to get query params
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const page = parseInt(params.get("page") || "1", 10);
      setCurrentPage(page);
      fetchEventData(page);
    }
  }, []);

  // Update URL when page changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      params.set("page", currentPage);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      router.push(newUrl);
      fetchEventData(currentPage);
    }
  }, [currentPage]);

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
