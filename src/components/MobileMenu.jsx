"use client";
import { navLinks } from "@/Utils/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const MobileMenu = ({ toggleMenu }) => {
  const session = useSession();

  return (
    <div className="absolute left-0 top-[45px] w-full py-7 h-[100vh] bg-white">
      <div className="flex flex-col justify-between items-center gap-12 h-max">
        <ul className=" flex gap-8 flex-col items-center justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="cursor-pointer font-bold primaryColor text-2xl py-2"
              onClick={toggleMenu}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div>
          {session.status === "authenticated" ? (
            <div className="flex flex-col gap-2">
              <Link
                href="/dashboard"
                className="primaryBgColor py-1 px-3 text-xl font-semibold w-max rounded-md text-white cursor-pointer"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>

              <div
                onClick={() => {
                  toggleMenu();
                  signOut();
                }}
                className="primaryBgColor py-1 px-3 text-xl font-semibold w-max rounded-md text-white cursor-pointer"
              >
                Sign Out
              </div>
            </div>
          ) : (
            <Link
              href="/auth"
              className="primaryBgColor py-1 px-3 text-xl font-semibold w-max rounded-md text-white cursor-pointer"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
