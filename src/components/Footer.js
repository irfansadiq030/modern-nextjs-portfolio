import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiHeartFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-16  rounded-t-[40] body-font">
      <div className="container pb-10 mx-auto flex items-center justify-center flex-col bg-[url('/circle-rings.png')] bg-contain bg-no-repeat bg-center">
        <h3 className="capitalize text-white text-3xl font-medium mb-5">
          Get in Touch with me
        </h3>
        <span className="w-40 h-[2] bg-secondary"></span>
        <Link
          href="/"
          className="text-silver text-xl font-light flex items-center justify-center mt-5"
        >
          14/345 Grand Aston, Sydney, Australia
        </Link>
        <Link
          href="/"
          className="text-silver text-xl font-light flex items-center justify-center mt-5"
        >
          hello@irfansadiq.pk
        </Link>
        <Link
          href="/"
          className="text-silver text-xl font-light flex items-center justify-center mt-5"
        >
          +92 3087884179
        </Link>
        <div className="flex my-10 justify-between">
          <Link href="/" className="mr-4 text-secondary hover:text-white">
            <RiFacebookCircleFill size={30} />
          </Link>
          <Link href="/" className="mr-4 text-secondary hover:text-white">
            <RiInstagramFill size={30} />
          </Link>
          <Link href="/" className="mr-4 text-secondary hover:text-white">
            <RiLinkedinBoxFill size={30} />
          </Link>
        </div>
        <p className="flex flex-wrap text-silver font-light">
          Designed with
          <span className="text-red-600 mx-1">
            <RiHeartFill size={18} />
          </span>
          by irfan sadiq
        </p>
      </div>
    </footer>
  );
};

export default Footer;
