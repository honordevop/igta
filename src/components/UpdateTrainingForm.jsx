"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useInput from "@/hooks/use-input";
import { toast } from "react-toastify";
import { BeatLoader, ClimbingBoxLoader } from "react-spinners";
import { MdOutlineCloudDone } from "react-icons/md";

const UpdateTrainingForm = ({ id, hideUpdateEventForm, mutate }) => {
  const [regSuccess, setRegSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  // const [link, setLink] = useState();
  // console.log(title);

  const fetchEventData = async (id) => {
    // console.log("called");
    setDataLoading(true);
    try {
      const response = await fetch(`/api/training/${id}`);

      const res = await response.json();
      const data = res.event;
      // setData(res.event);
      setTitle(data.title);
      setDescription(data?.desc);
      setCategory(data?.category);
      // console.log(res);
      setTimeout(() => {
        setDataLoading(false);
      }, 1000);
    } catch (error) {
      // setError(error?.response);
      setDataLoading(false);
      toast(error?.message);

      // console.log(error);
    }
  };

  useEffect(() => {
    fetchEventData(id);
  }, [id]);

  // console.log(data);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setCategory(e.target.value);
  };

  const [file, setFile] = useState();
  const handleChangeImg = (e) => {
    const target = e.target;
    const item = target.files[0];
    setFile(item);
  };

  // const handleChange = (e) => {
  //   setInputs((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  const upload = async () => {
    if (file === undefined) {
      // setError("No file chosen");
      // setTimeout(() => {
      //   setError("");
      // }, 1500);
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "igtapreset");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ornor/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const resData = await res.json();
      // console.log(resData.secure_url);
      return resData.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();

    try {
      const url = await upload();
      const res = await fetch(`/api/training/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: url,
          title,
          desc: description,
          category,
        }),
      });

      mutate();
      const data = await res.json();
      //   console.log(data);
      toast(data.message);
      setLoading(false);
      setRegSuccess(true);
      //   router.push(`/product/${data.id}`);
    } catch (error) {
      // console.log(error);
      setLoading(false);
      toast.warn(error.message);
    }
    // console.log(inputs);
  };

  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-[#00000086]  flex items-center justify-center">
      {!loading && !regSuccess && (
        <div className="w-full pb-8 flex flex-col items-center justify-center h-full">
          <div className="realtive bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-0 md:mx-auto px-4 md:px-16 py-8 rounded-lg shadow-2xl overflow-auto">
            <p className="font-bold text-lg py-3">Update Event</p>
            {dataLoading ? (
              <p>Loading...</p>
            ) : (
              <form className="my-8 text-sm" onSubmit={handleSubmit}>
                <div className="flex flex-col my-4">
                  <label htmlFor="" className="font-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    name="title"
                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Enter Event Title"
                    // onChange={handleChange}
                    value={title}
                    // onBlur={titleBlurHandler}
                    onChange={titleChangeHandler}
                  />
                </div>

                <div className="">
                  <label htmlFor="" className="font-semibold">
                    Description
                  </label>
                  <div className="w-full border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-0  rounded">
                    <textarea
                      className="w-full p-2  focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                      placeholder="Event Description"
                      required
                      name="desc"
                      // onChange={handleChange}
                      value={description}
                      onChange={descriptionChangeHandler}
                      // onBlur={descriptionBlurHandler}
                    ></textarea>
                  </div>
                </div>

                <div className="flex flex-col my-4">
                  <label htmlFor="" className="font-semibold">
                    Image
                  </label>
                  <input
                    type="file"
                    // required
                    name="file"
                    onChange={handleChangeImg}
                    id="file"
                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Upload Image"
                    //   value={image}
                    //   onBlur={imageBlurHandler}
                    //   onChange={imageChangeHandler}
                  />
                </div>

                <div className="flex flex-col my-4">
                  <label htmlFor="" className="font-semibold">
                    Category
                  </label>
                  <input
                    type="text"
                    required
                    name="time"
                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Event Time"
                    // onChange={handleChange}
                    value={category}
                    onChange={categoryChangeHandler}
                    // onBlur={timeBlurHandler}
                  ></input>
                </div>

                <div className="w-full my-4 flex items-center justify-end space-x-4">
                  {!loading && (
                    <button
                      className="w-full primaryBgColor hover:primaryBgColorLight rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold"
                      // onClick={() => createEvent()}
                    >
                      Update
                    </button>
                  )}
                  {loading && (
                    <div className="w-full flex items-center justify-center">
                      <BeatLoader color="#b52624" />
                    </div>
                  )}
                </div>
              </form>
            )}

            <div
              className=" absolute top-3 right-3 text-4xl cursor-pointer"
              onClick={hideUpdateEventForm}
            >
              <AiOutlineCloseCircle />
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="">
          <ClimbingBoxLoader color="red" size={30} />
        </div>
      )}
      {regSuccess && (
        <div className=" bg-white w-[70%] h-[30%] flex flex-col items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center">
            <MdOutlineCloudDone color="red" className="text-7xl" />
            <p className="text-lg font-semibold">
              Training Updated Successfully
            </p>
            <div
              className="px-5 py-2 primaryBgColor hover:primaryBgVolorLight font-semibold text-lg text-white rounded-lg cursor-pointer"
              onClick={() => {
                hideUpdateEventForm();
                setRegSuccess(false);
              }}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateTrainingForm;
