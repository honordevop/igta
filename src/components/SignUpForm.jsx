"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useCountries } from "use-react-countries";
import { AiFillEye } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";
import Image from "next/image";
import useInput from "@/hooks/use-input";
import { toast } from "react-toastify";
import { designationOptions, genderOptions } from "@/Utils/store";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";

const SignUpForm = ({ handleHideSignUpForm }) => {
  const { countries } = useCountries();
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [countryCode, setCountryCode] = useState("");
  const [show, setShow] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const countryCodeChangeHandler = (e) => {
    setCountryCode(e.target.value);
  };
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

  const {
    value: passwordCheck,
    isValid: passwordCheckIsValid,
    hasError: passwordCheckHasError,
    valueChangeHandler: passwordCheckChangeHandler,
    inputBlurHandler: passwordCheckBlurHandler,
    reset: passwordCheckInputReset,
  } = useInput((value) => value === password);

  const {
    value: fullName,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: fullNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: country,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: mobileNumber,
    isValid: mobileNumberIsValid,
    hasError: mobileNumberHasError,
    valueChangeHandler: mobileNumberChangeHandler,
    inputBlurHandler: mobileNumberBlurHandler,
    reset: mobileNumberInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: occupation,
    isValid: occupationIsValid,
    hasError: occupationHasError,
    valueChangeHandler: occupationChangeHandler,
    inputBlurHandler: occupationBlurHandler,
    reset: occupationInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: designation,
    isValid: designationIsValid,
    hasError: designationHasError,
    valueChangeHandler: designationChangeHandler,
    inputBlurHandler: designationBlurHandler,
    reset: designationInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: gender,
    isValid: genderIsValid,
    hasError: genderHasError,
    valueChangeHandler: genderChangeHandler,
    inputBlurHandler: genderBlurHandler,
    reset: genderInputReset,
  } = useInput((value) => value.trim() !== "");

  //   const {
  //     errorMessage: loginErrorMessage,
  //     setErrorMessage: setLoginErrorMessage,
  //   } = useError();

  let formIsValid =
    emailIsValid &&
    passwordIsValid &&
    fullNameIsValid &&
    countryIsValid &&
    mobileNumberIsValid &&
    occupationIsValid &&
    genderIsValid &&
    designationIsValid &&
    passwordCheckIsValid;

  const sendWelcomeEmail = async () => {
    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullname: fullName,
        }),
      });
      const data = await res.json();
      //   console.log(res.status);
      // toast(data.message);
    } catch (error) {
      console.log(error);
      // setLoading(false);
      // toast.warn(error.message);
    }
  };
  const register = async () => {
    // console.log(`${email} + ${password} + ${firstName} + ${lastName} `);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullName,
          email,
          mobilenumber: `${countryCode}${mobileNumber}`,
          country,
          gender,
          designation,
          occupation,
          password,
        }),
      });
      // const data = await res.json();
      const data = await res.json();
      // console.log(data);
      toast(data.message);
      sendWelcomeEmail();
      //   res.status === 201 && setRegSuccess(true);
      setTimeout(() => {
        emailInputReset();
        passwordInputReset();
        passwordCheckInputReset();
        fullNameInputReset();
        mobileNumberInputReset();
        occupationInputReset();
        genderInputReset();
        designationInputReset();
        countryInputReset();
      }, 2000);
      setLoading(false);
      setTimeout(() => {
        if (res.status === 201) {
          router.push("/auth?success=Account has been created");
        }
      }, 3000);
    } catch (error) {
      // console.log(error);
      //   setLoginErrorMessage(error.response.data.message);
      setLoading(false);
      toast.warn(error.message);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    setLoading(true);

    // console.log("hello");
    const userEntries = {
      email: email,
      password: password,
      country,
      occupation,
      mobilenumber: `${countryCode}${mobileNumber}`,
      gender,
      designation,
      fullname: fullName,
      password,
      passwordCheck: passwordCheck,
    };

    // console.log(`${firstName} ${lastName} ${password} ${passwordCheck}`)

    // console.log(userEntries);

    register();

    // console.log(userInput);
    // setOtpVerificationStarted(true);
    // setUserInput(userEntries)

    // setTimeout(() => {
    //   emailInputReset();
    //   passwordInputReset();
    //   passwordCheckInputReset();
    //   firstNameInputReset();
    //   lastNameInputReset();
    // }, 10000);
  };
  return (
    <div>
      <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
        <div className="w-full pb-8 flex flex-col items-center justify-center">
          <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-0 md:mx-auto px-4 md:px-16 py-8 rounded-lg shadow-2xl">
            <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
              Sign Up
            </h2>
            <p
              className="text-center text-sm text-gray-600 mt-2"
              onClick={handleHideSignUpForm}
            >
              Already have an account? <br />{" "}
              <span className="text-blue-600 hover:text-blue-700 font-bold hover:underline cursor-pointer">
                Sign in here
              </span>
            </p>

            <form className="my-8 text-sm" onSubmit={formSubmitHandler}>
              <div className="flex flex-col my-4">
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your Fullname"
                  value={fullName}
                  onBlur={fullNameBlurHandler}
                  onChange={fullNameChangeHandler}
                />

                {fullNameHasError && (
                  <p className="text-red-500">Enter a valid Input</p>
                )}
              </div>

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
                <select
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  onChange={genderChangeHandler}
                  onBlur={genderBlurHandler}
                >
                  {genderOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                {genderHasError && (
                  <p className="text-red-500">Select an Option</p>
                )}
              </div>

              <div className="flex flex-col my-4">
                <select
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  onChange={countryChangeHandler}
                  onBlur={countryBlurHandler}
                >
                  <option value="">Country</option>
                  {countries.map(({ name }) => (
                    <option key={name}>{name}</option>
                  ))}
                </select>
                {countryHasError && (
                  <p className="text-red-500">Select a Country</p>
                )}
              </div>

              <div className="">
                <div className="w-full flex flex-row border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-0  rounded">
                  <select
                    className="w-[30%] p-2  border border-gray-300 focus:outline-none focus:ring-0  rounded text-sm text-gray-900 bg-gray-100"
                    onChange={countryCodeChangeHandler}
                  >
                    {countries.map(({ name, countryCallingCode, flags }) => (
                      <option key={name}>{countryCallingCode}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="w-[70%] p-2  focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                    placeholder="Mobile Number"
                    onChange={mobileNumberChangeHandler}
                    onBlur={mobileNumberBlurHandler}
                  ></input>
                </div>
                {mobileNumberHasError && (
                  <p className="text-red-500">Enter a valid Number</p>
                )}
              </div>

              <div className="flex flex-col my-4">
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Occupation"
                  onChange={occupationChangeHandler}
                  onBlur={occupationBlurHandler}
                ></input>
                {occupationHasError && (
                  <p className="text-red-500">Enter a valid Input</p>
                )}
              </div>

              <div className="flex flex-col my-4">
                <select
                  className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  onChange={designationChangeHandler}
                  onBlur={designationBlurHandler}
                >
                  {designationOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                {designationHasError && (
                  <p className="text-red-500">Enter a valid Input</p>
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
                      placeholder="Enter your password"
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

              <div className="flex items-center">
                <input
                  required={true}
                  type="checkbox"
                  className="mr-2 focus:ring-0 rounded"
                />
                <label htmlFor="" className="text-gray-700">
                  I accept the{" "}
                  <Link
                    href="https://igtainternational.org/terms"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://igtainternational.org/privacy"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    privacy policy
                  </Link>
                </label>
              </div>

              <div className="w-full my-4 flex items-center justify-end space-x-4">
                {!loading && (
                  <button className="w-full bg-[#b52624] hover:bg-red-400 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase font-semibold">
                    Sign Up
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

export default SignUpForm;
