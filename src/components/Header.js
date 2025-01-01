import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header class="text-gray-600 font-poppins">
      <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src="/logo.svg" width={100} height={50} alt="logo" />
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            class="mr-9 text-white hover:text-secondary active:text-secondary"
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
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
        </button>
      </div>
    </header>
  );
};

export default Header;
