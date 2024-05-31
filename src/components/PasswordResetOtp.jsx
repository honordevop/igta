"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";
import useInput from "@/hooks/use-input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { BeatLoader, BounceLoader } from "react-spinners";
import { IoCaretBackCircleOutline } from "react-icons/io5";
// import { signIn, useSession } from "next-auth/react";

const PasswordResetOtp = ({ showPasswordForm, hideOtpForm, email }) => {
  //   const router = useRouter();
  //   const session = useSession();

  //   useEffect(() => {
  //     if (session.status === "authenticated") {
  //       router.push("/dashboard");
  //     }
  //   }, [session.status, router]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  //   const [showOtpForm, setShowOtpForm] = useState(false);

  const {
    value: otp,
    isValid: otpIsValid,
    hasError: otpHasError,
    valueChangeHandler: otpChangeHandler,
    inputBlurHandler: otpBlurHandler,
    reset: otpInputReset,
  } = useInput((value) => value.trim() !== "");

  const verifyOtp = async () => {
    setLoading(true);
    // console.log(`${email} + ${password} + ${firstName} + ${lastName} `);
    try {
      const res = await fetch("/api/verifyotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });
      const data = await res.json();
      //   console.log(res.status);
      toast(data.message);
      setLoading(false);
      if (res.status === 200) {
        // emailInputReset();
        showPasswordForm();
      }
      //   }, 4000);
    } catch (error) {
      // console.log(error);
      setLoading(false);
      toast.warn(error.message);
    }
  };

  return (
    <div className="relative">
      <div className="my-8 text-sm">
        <div
          className="absolute -top-14 -left-11"
          onClick={() => hideOtpForm()}
        >
          <IoCaretBackCircleOutline className="text-2xl text-red-500" />
        </div>
        <div className="flex flex-col my-4">
          <label htmlFor="" className="font-bold">
            Enter OTP Code Sent to your email
          </label>
          <input
            type="text"
            name="otp"
            id="otp"
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
            placeholder="Enter OTP Code"
            value={otp}
            onBlur={otpBlurHandler}
            onChange={otpChangeHandler}
          />
          {otpHasError && <p className="text-red-500">Enter Valid Input</p>}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="w-full my-4 flex items-center justify-end space-x-4">
          {!loading && (
            <button
              className="w-full bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold"
              onClick={() => verifyOtp()}
            >
              Verify
            </button>
          )}
          {loading && (
            <div className="w-full flex items-center justify-center">
              <BeatLoader color="#b52624" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordResetOtp;
