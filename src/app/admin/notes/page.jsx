"use client";
import Tabs from "@/components/DashBoardTabs/Tabs";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import MobileMenu from "@/components/DashBoardTabs/MobileMenu";
import { usePathname, useRouter } from "next/navigation";
// import { useGlobalContext } from "@/contextAPI/context";
// import useRData from "@/hooks/useRData";
import { BounceLoader } from "react-spinners";
import { adminTabsLink } from "@/Utils/store";
import useRData from "@/hooks/useRData";
import { useSession } from "next-auth/react";
import ProfilePanel from "@/components/ProfilePanel";
import { useGlobalContext } from "@/contextAPI/context";
import { toast } from "react-toastify";
import EventList from "@/components/EventList";
import EventsList from "@/components/EventsList";
import useSWR from "swr";
import CreateTrainingForm from "@/components/CreateTrainingForm";
import UpdateTrainingForm from "@/components/UpdateTrainingForm";
import TrainingsList from "@/components/TrainingsList";
import NotesList from "@/components/NotesList";
import CreateNoteForm from "@/components/CreateNoteForm";
import UpdateNoteForm from "@/components/UpdateNoteForm";
import CreateNoteFormm from "@/components/CreateNoteFormm";
import UpdateNoteFormm from "@/components/UpdateNoteFormm";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Notes = () => {
  const pathname = usePathname();

  const { data: session, status } = useSession();
  const router = useRouter();
  const { pageLoading, offPageLoading } = useGlobalContext();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth");
    } else if (
      status === "authenticated" &&
      session?.user?.email !== process.env.NEXT_PUBLIC_MAIL_CHECK
    ) {
      router.push("/dashboard");
    }
  }, [status, session, router]);

  const currentPage = pathname ? pathname.split("/").pop() : "";
  // const { pageLoading, offPageLoading } = useGlobalContext();

  const { data: userData, fetchData, error: err } = useRData();

  const [addPadding, setAddPadding] = useState("0");
  const [leftWidth, setLefttWidth] = useState("20");
  const [rightWidth, setRightWidth] = useState("80");
  const [changeWidth, setChangeWidth] = useState(false);
  const [eventList, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [display, setDisplay] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [id, setId] = useState();

  const [showUpdateEventForm, setShowUpdateEventForm] = useState(false);

  // const fetchEventData = async (id) => {
  //   console.log("called");
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`/api/events/${id}`);

  //     const res = await response.json();
  //     setEvent(res.event);
  //     // console.log(res);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   } catch (error) {
  //     // setError(error?.response);
  //     setLoading(false);
  //     toast(error?.message);

  //     console.log(error);
  //   }
  // };

  const hideUpdateEventForm = () => {
    setShowUpdateEventForm(false);
  };

  const sendId = (id) => {
    setId(id);
  };
  const showUpdateEventFormHandler = (id) => {
    sendId(id);
    setShowUpdateEventForm(true);
  };

  const { data, mutate, error } = useSWR("/api/note", fetcher);

  // Import Axios
  // const axios = require("axios");

  // Function to perform a GET request
  // async function fetchDataa(url) {
  //   console.log("Called");
  //   try {
  //     const response = await axios.get(url);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // // Example usage
  // const url = "/api/note"; // Replace with your URL
  // fetchDataa(url);

  // console.log(data?.notes);

  // const newData = fetch("/api/note");

  // console.log(newData);

  const sortedData = data?.notes?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  // console.log(eventList);
  const deleteEvent = async (id) => {
    setDeleting(true);
    const userConfirmed = confirm("Are you sure you want to delete Note?");

    if (!userConfirmed) {
      setDeleting(false);
      return;
    }

    try {
      const response = await fetch(`/api/note/${id}`, {
        method: "DELETE",
      });

      const res = await response.json();
      mutate();
      toast(res?.message);

      setTimeout(() => {
        setDeleting(false);
      }, 1500);
    } catch (error) {
      // setError(error?.response);
      setDeleting(false);
      toast(error?.response.message);
      // console.log(error?.response);
    }
  };

  const displayNoteHandler = async (id, show) => {
    setDisplay(true);
    const userConfirmed = confirm(
      "Are you sure you want to change Note Display Status?"
    );

    if (!userConfirmed) {
      setDisplay(false);
      return;
    }

    try {
      const response = await fetch(`/api/note/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          show: show,
        }),
      });

      const res = await response.json();
      mutate();
      toast(res?.message);

      setTimeout(() => {
        setDisplay(false);
      }, 1500);
    } catch (error) {
      // setError(error?.response);
      setDisplay(false);
      toast(error?.response.message);
      // console.log(error?.response);
    }
  };

  const hideEventsFormHandler = () => {
    setShowEventForm(false);
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetchData(`/api/user?email=${session.user.email}`, {
        next: { revalidate: 10 },
      });
    }

    // return () => {
    //   fetchEventData();
    // };
  }, [session?.user?.email]);

  // console.log(eventsList);

  useEffect(() => {
    if (userData.user) {
      offPageLoading();
    }
  }, [userData?.user]);

  useEffect(() => {
    handleWidthChage();
  }, [changeWidth, leftWidth]);

  const turnOn = () => {
    setChangeWidth((prev) => !prev);
  };

  const handleWidthChage = () => {
    localStorage.setItem("changeWidth", changeWidth);
    if (changeWidth) {
      setLefttWidth("5");
      setRightWidth("95");
      setAddPadding("10");
    }
    if (!changeWidth) {
      setLefttWidth("20");
      setRightWidth("80");
      setAddPadding("0");
    }
  };

  if (pageLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <BounceLoader className="" size={80} color="#b52624" />
        </div>
      </div>
    );
  }

  if (
    status === "authenticated" &&
    session?.user?.email === process.env.NEXT_PUBLIC_MAIL_CHECK
  ) {
    return (
      <div className="w-full h-screen flex items-center font-space_grotesk bg-white ">
        {/* Left Side */}
        <div
          className={`h-full transitionWidth hideDivMax1024  primaryBgColor`}
          style={{ width: `${leftWidth}%` }}
        >
          <Tabs currentPage={currentPage} tabLink={adminTabsLink} />
        </div>

        {/* Right Side */}
        <div className={` w-full h-full`}>
          {/* Wrapper */}
          <div className="w-full h-full">
            <div className="h-max py-4 px-8 bg-[#f3f4f6] flex items-center justify-between relative ">
              <p
                className="text-base md:text-xl font-bold "
                style={{ paddingLeft: `${addPadding}px` }}
              >
                Welcome!
              </p>

              <div className="font-medium mr-10">
                <p>{userData?.user?.fullname}</p>
                <p>{userData?.user?.email}</p>
              </div>

              {!changeWidth ? (
                <div
                  className="py-2 pr-3 bg-[#8a2928] w-max rounded-l-md absolute -left-9 top-5 cursor-pointer hideDivMax1024"
                  onClick={() => turnOn()}
                >
                  <FaCaretLeft className="text-2xl" />
                </div>
              ) : (
                <div
                  className="py-2 pl-3 bg-[#8a2928] w-max rounded-r-md absolute -left-0 top-5 cursor-pointer hideDivMax1024"
                  onClick={() => turnOn()}
                >
                  <FaCaretRight className="text-2xl" />
                </div>
              )}
            </div>

            <MobileMenu currentPage={currentPage} tabLink={adminTabsLink} />

            <div className="m-8 h-[70%] md:h-[80%] overflow-y-scroll hideScrollBar">
              <p className="text-xl font-bold hideDivMax1024">
                {currentPage.charAt(0).toUpperCase() +
                  currentPage.slice(1).toLowerCase()}
              </p>

              <div className="">
                {/* <DashBoardPannel profileData={userData.user} /> */}
                {/* <ProfilePanel profileData={userData.user} /> */}
                <div className="mb-6 mt-0 md:my-6">
                  <button
                    className=" bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition cursor-pointer duration-150 uppercase font-semibold"
                    onClick={() => setShowEventForm(true)}
                  >
                    Create Note
                  </button>
                </div>
                <div>
                  <h1 className="font-bold text-lg my-6">Note List</h1>
                  <NotesList
                    data={sortedData}
                    deleteHandler={deleteEvent}
                    showUpdateEventFormHandler={showUpdateEventFormHandler}
                    displayNoteHandler={displayNoteHandler}
                    deleteLoading={deleting}
                    displayLoading={display}
                  />
                </div>
                {/* <EventList /> */}
              </div>
            </div>
          </div>

          {showEventForm && !showUpdateEventForm && (
            <CreateNoteFormm hideForm={hideEventsFormHandler} mutate={mutate} />
          )}

          {showUpdateEventForm && !showEventForm && (
            <UpdateNoteFormm
              id={id}
              data={eventList}
              hideUpdateEventForm={hideUpdateEventForm}
              mutate={mutate}
              dataLoading={loading}
            />
          )}
        </div>
      </div>
    );
  }
};

export default Notes;
