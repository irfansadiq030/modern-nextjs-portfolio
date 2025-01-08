import React from "react";
import { IoHome } from "react-icons/io5";
import { FaEnvelope, FaGear } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { PiCodeSimpleFill } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileHeader = () => {
  // ** Hooks
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className="w-full bg-red min-h-[50px] fixed bottom-2 left-0 flex justify-center items-center z-40 md:hidden">
      <div className="bg-white w-11/12 rounded-[5px] h-full z-50 absolute bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 flex justify-between items-center px-3 overflow-x-auto">
        <Link
          href="/"
          className={`${
            currentPath === "/" ? "bg-accent" : "bg-primary"
          } w-[35px] h-[35px] rounded-[5px] flex justify-center items-center`}
        >
          <IoHome className="text-[23px] text-white" />
        </Link>
        <Link
          href="/about"
          className={`${
            currentPath === "/about" ? "bg-accent" : "bg-primary"
          } w-[35px] h-[35px] rounded-[5px] flex justify-center items-center`}
        >
          <FaUserCircle className="text-[23px] text-white" />
        </Link>
        <Link
          href="/"
          className={`${
            currentPath === "/services" ? "bg-accent" : "bg-primary"
          } w-[35px] h-[35px] rounded-[5px] flex justify-center items-center`}
        >
          <FaGear className="text-[23px] text-white" />
        </Link>
        <Link
          href="/"
          className={`${
            currentPath === "/portfolio" ? "bg-accent" : "bg-primary"
          } w-[35px] h-[35px] rounded-[5px] flex justify-center items-center`}
        >
          <PiCodeSimpleFill className="text-[25px] text-white" />
        </Link>
        <Link
          href="/contact"
          className={`${
            currentPath === "/contact" ? "bg-accent" : "bg-primary"
          } w-[35px] h-[35px] rounded-[5px] flex justify-center items-center`}
        >
          <FaEnvelope className="text-[23px] text-white" />
        </Link>
      </div>
    </header>
  );
};

export default MobileHeader;
