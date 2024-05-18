import React from "react";
// import Socials from "./Socials";
import { IoLocationSharp } from "react-icons/io5";
import { BsEnvelopeCheckFill } from "react-icons/bs";
import { MdPermPhoneMsg } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <div className="w-full">
      <div
        className="w-full flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(/brushstroke-oriz-blue.svg)`,
          backgroundSize: "",
          backgroundRepeat: "repeat-x",
          backgroundPositionY: "center",
          backgroundPosition: "bottom",
          // width: "100%",
          // height: "300px", // Adjust height as needed
        }}
      >
        <NewsLetter />
      </div>

      <div className="w-full flex items-center justify-center flex-col mt- primaryBgColor text-white">
        <div className="container my-10 ">
          <div className="w-full flex flex-col md:flex-row justify-start  md:justify-between items-centero">
            <div className="flex-1 flex gap-20">
              <div className="flex flex-col gap-5 md:gap-2 ">
                <div className="flex flex-row md:flex-col gap-8 md:gap-2">
                  <Link href="/" className=" w-max">
                    <div className="relative w-[85px] h-[85px] md:w-[95px] md:h-24">
                      <Image
                        src="/whitelogo.png"
                        alt="logo"
                        fill={true}
                        priority
                      />
                    </div>
                  </Link>
                  <div className="">
                    <p className="text-xl">
                      Insight Global Training Academy (IGTA)
                    </p>
                    <p>IGTA RN: 7312655</p>
                  </div>
                </div>
                <Socials />
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-5 md:gap-20 mt-5 md:mt-0">
              <div>
                <p className="text-xl mb-1 font-semibold">Links</p>
                <ul className="flex flex-col gap-2 mt-4">
                  <Link href="/about">About</Link>
                  <Link href="/trainings">Trainings</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/events">Events</Link>
                </ul>
              </div>

              <div>
                <p className="text-xl mb-1 font-semibold">Resources</p>
                <ul className="flex flex-col gap-2 mt-4">
                  <Link href="/terms">Terms</Link>
                  <Link href="/privacy">Privacy </Link>
                </ul>
              </div>

              <div>
                <p className="text-xl mb-1 font-semibold">Contact Info</p>
                <ul className="flex flex-col gap-2 mt-4">
                  <li className="flex gap-5 items-center">
                    <IoLocationSharp className="text-2xl" />{" "}
                    <div>
                      <p> Manitoba, Canada &</p>
                      <p>Emana, Yaoundé-Cameroon</p>
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <MdPermPhoneMsg className="text-2xl" />
                    <div>
                      <p>+237 656676753</p>
                      <p>+234 9061304961</p>
                      <p>+971 502014053</p>
                      <p>+49 1789830368</p>
                      <p>+237 676789863</p>
                      <p>+254 746712298</p>
                      <p>+231 775596848</p>
                      <p>+233 248975472</p>
                    </div>
                  </li>
                  <li className="flex gap-5 items-center">
                    <BsEnvelopeCheckFill className="text-2xl" />{" "}
                    <div>
                      <p>info@igtainternational.org</p>
                      <p>
                        insightglobaltrainingacademy <br /> @gmail.com
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 w-full flex items-center justify-center">
          <p className="py-3 text-center">
            Copyright © 2024 - Insight Global Training Academy (IGTA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
