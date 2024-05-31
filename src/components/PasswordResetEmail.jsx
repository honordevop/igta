"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";
import useInput from "@/hooks/use-input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { BeatLoader, BounceLoader } from "react-spinners";
// import { signIn, useSession } from "next-auth/react";

const PasswordResetEmail = ({
  showOtpForm,
  email,
  emailIsValid,
  emailChangeHandler,
  emailBlurHandler,
  emailHasError,
}) => {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  //   const [showOtpForm, setShowOtpForm] = useState(false);

  const generateOtp = async () => {
    setLoading(true);
    // console.log(`${email} + ${password} + ${firstName} + ${lastName} `);
    try {
      const res = await fetch("/api/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await res.json();
      //   console.log(res.status);
      toast(data.message);
      setLoading(false);
      //   setTimeout(() => {
      if (res.status === 200) {
        // emailInputReset();
        showOtpForm();
      }
      //   }, 4000);
    } catch (error) {
      // console.log(error);
      setLoading(false);
      toast.warn(error.message);
    }
  };

  //   const submitEmail = async (e) => {
  //     e.preventDefault();

  //     if (!formIsValid) {
  //       return;
  //     }
  //     setLoading(true);

  //     setTimeout(() => {
  //       setError("");
  //     }, 3000);
  //   };

  return (
    <div>
      <div className="my-8 text-sm">
        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Enter your email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
            placeholder="Email Address"
            value={email}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
          />
          {emailHasError && <p className="text-red-500">Enter a valid Email</p>}
        </div>
        {!loading && (
          <div
            className="w-full my-4 flex items-center justify-end space-x-4 cursor-pointer"
            onClick={() => generateOtp()}
          >
            <div className="w-full bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold text-center ">
              Continue
            </div>
          </div>
        )}
        {loading && (
          <div className="w-full flex items-center justify-center">
            <BeatLoader color="#b52624" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordResetEmail;
