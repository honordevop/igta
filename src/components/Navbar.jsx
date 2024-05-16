"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
// import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "@/utils/store";
import MobileMenu from "./MobileMenu";
import { signOut, useSession } from "next-auth/react";
// import Button from "@/UI/Button";
// import NavMenu from "./NavMenu";

const Navbar = () => {
  const session = useSession();
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
    setToggle(false);
  };
  return (
    <div className="fixed top-0 left-0 z-[199] w-full  flex items-center justify-center md:px-8 bg-white shadow-lg">
      <div className="bg-white  w-full flex justify-center py-2 md:py-2 container">
        <div className="relative w-full flex items-center justify-between  ">
          <Link href="/">
            <div className="relative w-[55px] h-[45px] md:w-[70px] md:h-16">
              <Image src="/logo.png" alt="logo" fill={true} priority />
            </div>
          </Link>

          <div className="hidden md:block">
            <ul className=" flex gap-4 ">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="cursor-pointer font-medium primaryColor"
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>

          {session.status === "authenticated" ? (
            <div
              onClick={signOut}
              className="primaryBgColor py-1 px-3 text-xl font-semibold w-max rounded-md text-white cursor-pointer"
            >
              Sign Out
            </div>
          ) : (
            <Link
              href="#"
              className="primaryBgColor py-1 px-3 text-xl font-semibold w-max rounded-md text-white cursor-pointer"
            >
              Sign In
            </Link>
          )}

          <div className="md:hidden flex items-center gap-5 primaryColor text-[40px] cursor-pointer bg-white">
            {!toggle ? (
              <GiHamburgerMenu className="" onClick={() => setToggle(true)} />
            ) : (
              <AiOutlineClose
                className="md:text-[30px]"
                onClick={() => setToggle(false)}
              />
            )}
          </div>
          {/* <MobileMenu /> */}
          {toggle && <MobileMenu toggleMenu={closeMenu} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
