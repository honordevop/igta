import useRData from "@/hooks/useRData";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const EventCard = () => {
  const [eventsList, setEventsList] = useState([]);
  const { data: userData, fetchData, error: err } = useRData();
  const { data: session, status } = useSession();

  const fetchEventData = async () => {
    try {
      const response = await fetch("/api/events");

      const res = await response.json();
      setEventsList(res.events);
    } catch (error) {
      // setError(error?.response);
      toast(error?.response.message);
      // console.log(error?.response);
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetchEventData();
    }
  }, [session?.user?.email]);

  // console.log(eventsList);
  return (
    <div className="w-full flex  items-center flex-col gap-2 mt-4 ">
      {eventsList?.map((item, i) => (
        <div
          className="flex flex-col h-[70vh] md:h-max md:flex-row w-full md:w-[80%] border-gray-200 border"
          key={i}
        >
          {item?.image && (
            <div className="flex-1 h-[40vh] md:h-[50vh] w-full">
              <Image
                src={item?.image}
                fill
                className="object-fill"
                alt="event image"
              />
            </div>
          )}
          <div className="flex-1 p-5 md:pt-0 flex flex-col gap-2">
            {item?.title && <p className="text-xl font-bold"> {item?.title}</p>}
            {item?.description && <p>{item?.description}</p>}

            {item?.duration && (
              <p className="font-bold">
                Duration: <span className="pl-5">{item?.duration}</span>
              </p>
            )}
            {item?.time && (
              <p className="font-bold">
                Time: <span className="pl-5">{item?.time}</span>
              </p>
            )}

            {item?.facilitator && (
              <p className="font-bold">
                Facilitator: <span className="pl-5">{item?.facilitator}</span>
              </p>
            )}

            {item?.mode && (
              <p className="font-bold">
                Mode: <span className="pl-5">{item?.mode}</span>
              </p>
            )}

            {item?.location && (
              <p className="font-bold">
                Location: <span className="pl-5">{item?.location}</span>
              </p>
            )}

            {item?.link && (
              <Link
                href={item?.link}
                className="w-full bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold"
              >
                Register
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
