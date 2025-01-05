import React from "react";
import { IoHome } from "react-icons/io5";
import { FaEnvelope, FaGear } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { PiCodeSimpleFill } from "react-icons/pi";
import Link from "next/link";

const MobileHeader = () => {
  return (
    <header className="w-full bg-red min-h-[50px] fixed bottom-3 left-0 flex justify-center items-center z-40 md:hidden">
      <div className="bg-white w-11/12 rounded-[5px] h-full z-50 absolute bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 flex justify-between items-center px-3 overflow-x-auto">
        <Link
          href="/"
          className="w-[35px] h-[35px] bg-primary rounded-[5px] flex justify-center items-center"
        >
          <IoHome className="text-[23px] text-white" />
        </Link>
        <Link
          href="/about"
          className="w-[35px] h-[35px] bg-primary rounded-[5px] flex justify-center items-center"
        >
          <FaUserCircle className="text-[23px] text-white" />
        </Link>
        <Link
          href="/"
          className="w-[35px] h-[35px] bg-primary rounded-[5px] flex justify-center items-center"
        >
          <FaGear className="text-[23px] text-white" />
        </Link>
        <Link
          href="/"
          className="w-[35px] h-[35px] bg-primary rounded-[5px] flex justify-center items-center"
        >
          <PiCodeSimpleFill className="text-[25px] text-white" />
        </Link>
        <Link
          href="/contact"
          className="w-[35px] h-[35px] bg-primary rounded-[5px] flex justify-center items-center"
        >
          <FaEnvelope className="text-[23px] text-white" />
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
