"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";
import useInput from "@/hooks/use-input";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { BeatLoader, BounceLoader } from "react-spinners";
import { signIn, useSession } from "next-auth/react";
import { BsCaretLeftSquareFill } from "react-icons/bs";
import { IoCaretBackCircleOutline } from "react-icons/io5";

const LoginForm = ({ handleShowSignUpForm }) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (
      session.status === "authenticated" &&
      session.data.email !== process.env.NEXT_PUBLIC_MAIL_CHECK
    ) {
      router.push("/dashboard");
    } else if (
      session.status === "authenticated" &&
      session.data.email === process.env.NEXT_PUBLIC_MAIL_CHECK
    ) {
      router.push("/admin");
    }
  }, [session.status, router]);
  const [passwordType, setPasswordType] = useState("password");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const showPassword = () => {
    setPasswordType("text");
    setShow(true);
  };
  const hidePassword = () => {
    setPasswordType("password");
    setShow(false);
  };

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordInputReset,
  } = useInput((value, password) => value.trim() !== "" && value.length > 7);

  let formIsValid = emailIsValid && passwordIsValid;

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    setLoading(true);

    signIn("credentials", {
      email: email.toLowerCase(),
      password: password,
      redirect: false,
    }).then((res) => {
      setError(res.error);
      toast(res.error);
      setLoading(false);
      if (!res.error) {
        setLoginLoading(true);
        router?.push("/dashboard");
      }
      setTimeout(() => {
        setError("");
      }, 3000);
    });
  };

  if (session.status === "loading" || loginLoading) {
    return (
      <div className=" h-[100vh] w-full flex flex-col items-center justify-center">
        <BounceLoader color="#b52624" size={100} />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
        <div className="w-full pb-8 flex flex-col items-center justify-center">
          <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-0 md:mx-auto px-4 md:px-16 py-8 rounded-lg shadow-2xl">
            <Link
              href="/"
              className="w-max text-red-500 rounded-lg py-2 hover:shadow-xl transition duration-150 uppercase font-semibold flex gap-4 items-center text-center"
            >
              <IoCaretBackCircleOutline color="red" className="text-2xl" />
              {/* <BsCaretLeftSquareFill color="#fff" className="text-2xl" /> */}
              <p>Home</p>
            </Link>
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              Sign In
            </h2>
            <p
              className="text-center text-sm text-gray-600 mt-2"
              onClick={handleShowSignUpForm}
            >
              You don't have an account? <br />{" "}
              <span className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
                Sign Up here
              </span>
            </p>

            <form className="my-8 text-sm" onSubmit={formSubmitHandler}>
              <div className="flex flex-col my-4">
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
                {emailHasError && (
                  <p className="text-red-500">Enter a valid Email</p>
                )}
              </div>

              <div className="flex flex-col my-4">
                <div>
                  <div className="relative flex items-center mt-2 border border-gray-300 rounded">
                    <input
                      className="w-[95%] p-2 pr-10 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                      placeholder="Enter your password"
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
                    <p className="text-red-500">Enter a valid Password</p>
                  )}
                </div>
              </div>
              <Link href="/passwordrecovery" className="flex flex-col my-4">
                <div>
                  <p className="text-red-500 cursor-pointer">
                    Forgot Password? Recover here
                  </p>
                </div>
              </Link>
              {error && <p className="text-red-500">{error}</p>}
              <div className="w-full my-4 flex items-center justify-end space-x-4">
                {!loading && (
                  <button className="w-full bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold">
                    LogIn
                  </button>
                )}
                {loading && (
                  <div className="w-full flex items-center justify-center">
                    <BeatLoader color="#b52624" />
                  </div>
                )}
              </div>
            </form>

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-sm">
              <Link
                href="#"
                className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 326667 333333"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path
                    d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                    fill="#4285f4"
                  ></path>
                  <path
                    d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                    fill="#34a853"
                  ></path>
                  <path
                    d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                    fill="#fbbc04"
                  ></path>
                  <path
                    d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                    fill="#ea4335"
                  ></path>
                </svg>
                <span>Sign up with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
