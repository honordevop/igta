import { navLinks } from "@/utils/store";
import Link from "next/link";
import React from "react";

const MobileMenu = ({ toggleMenu }) => {
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
      </div>
    </div>
  );
};

export default MobileMenu;
