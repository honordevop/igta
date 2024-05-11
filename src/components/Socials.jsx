import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex flex-col gap-3 text-[30px] font-space_grotesk">
      <ul className="flex gap-4 ">
        <Link href="https://wa.me/+2347069589771" target="_blank">
          <FaWhatsappSquare />
        </Link>
        <Link href="mailto:info@igtainternational.org" target="_blank">
          <FaEnvelope />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <FaInstagramSquare />
        </Link>
      </ul>
    </div>
  );
};

export default Socials;
