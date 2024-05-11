import Link from "next/link";
import React from "react";
import { PiCaretCircleRight } from "react-icons/pi";

const Button = ({ link, title }) => {
  return (
    <Link
      href={link}
      className="primaryBgColor py-3 text-xl font-semibold w-max rounded-md text-white cursor-pointer  mt-3 md:mt-6"
    >
      <div className="flex items-center justify-center gap-4 px-4">
        <p className="">{title}</p>
        <PiCaretCircleRight />
      </div>
    </Link>
  );
};

export default Button;
