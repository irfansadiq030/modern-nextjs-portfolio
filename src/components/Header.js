import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FiSend } from "react-icons/fi";

const Header = () => {
  return (
    <header class="text-gray-600 font-poppins">
      <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src="/logo.svg" width={130} height={50} alt="logo" />
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            class="mr-9 text-secondary hover:text-secondary active:text-secondary"
          >
            Home
          </Link>
          <Link
            href="/about"
            class="mr-9 text-white hover:text-secondary active:text-secondary"
          >
            About
          </Link>
          <Link href="/services" class="mr-9 text-white hover:text-secondary">
            Services
          </Link>
          <Link href="/contact" class="mr-9 text-white hover:text-secondary">
            Contact
          </Link>
        </nav>
        <button class="inline-flex uppercase font-medium items-center bg-accent text-white border-0 py-2 px-5 focus:outline-none rounded-[5] text-base mt-4 md:mt-0">
          Hire me
          <span className="ml-2 ">
            <FiSend size={19} />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
