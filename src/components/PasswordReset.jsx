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

const PasswordReset = ({ email }) => {
  const router = useRouter();

  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);

  const showPassword = () => {
    setPasswordType("text");
    setShow(true);
  };
  const hidePassword = () => {
    setPasswordType("password");
    setShow(false);
  };

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordInputReset,
  } = useInput((value, password) => value.trim() !== "" && value.length > 7);

  const {
    value: passwordCheck,
    isValid: passwordCheckIsValid,
    hasError: passwordCheckHasError,
    valueChangeHandler: passwordCheckChangeHandler,
    inputBlurHandler: passwordCheckBlurHandler,
    reset: passwordCheckInputReset,
  } = useInput((value) => value === password);

  //   let formIsValid = emailIsValid && passwordIsValid && passwordCheckIsValid;

  const submitPassword = async () => {
    setLoading(true);
    // console.log(`${email} + ${password} + ${firstName} + ${lastName} `);
    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      //   console.log(res.status);
      toast(data.message);
      setLoading(false);
      if (res.status === 201) {
        // emailInputReset();
        router.push("/auth");
      }
      //   }, 4000);
    } catch (error) {
      // console.log(error);
      setLoading(false);
      toast.warn(error.message);
    }
  };

  //   if (session.status === "loading" || loginLoading) {
  //     return (
  //       <div className=" h-[100vh] w-full flex flex-col items-center justify-center">
  //         <BounceLoader color="#b52624" size={100} />
  //       </div>
  //     );
  //   }

  return (
    <div>
      <div className="my-8 text-sm">
        <div className="flex flex-col my-4">
          <div>
            <div className="relative flex items-center mt-2 border border-gray-300 rounded">
              <input
                className="w-[95%] p-2 pr-10 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                placeholder="Enter new password"
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                type={passwordType}
              />
              {show && (
                <AiFillEye
                  className="cursor-pointer text-[#aba9a9] text-[20px] absolute top-2 right-2"
                  onClick={hidePassword}
                />
              )}
              {!show && (
                <IoMdEyeOff
                  className="cursor-pointer text-[#aba9a9] text-[20px] absolute top-2 right-2"
                  onClick={showPassword}
                />
              )}
            </div>
            {passwordHasError && (
              <p className="text-red-500">
                Enter a valid Password of atleast 8 characters
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col my-4">
          <div>
            <div className="relative flex items-center mt-2 border border-gray-300 rounded">
              <input
                className="w-[95%] p-2 pr-10 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                placeholder="Confirm password"
                onChange={passwordCheckChangeHandler}
                onBlur={passwordCheckBlurHandler}
                type={passwordType}
              />
            </div>
            {passwordCheckHasError && (
              <p className="text-red-500">Password does not match</p>
            )}
          </div>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="w-full my-4 flex items-center justify-end space-x-4">
          {!loading && (
            <button
              className="w-full bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold"
              onClick={() => submitPassword()}
            >
              Submit
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

export default PasswordReset;
