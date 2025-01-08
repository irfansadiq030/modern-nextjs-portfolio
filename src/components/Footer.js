import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiHeartFill,
  RiGithubLine,
} from "react-icons/ri";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-16  rounded-t-[40px] body-font">
      <div className="container pb-10 mx-auto flex items-center justify-center flex-col bg-[url('/circle-rings.png')] bg-contain bg-no-repeat bg-bottom">
        <h3 className="capitalize text-white text-3xl font-medium mb-6">
          Get in Touch with me
        </h3>
        <span className="w-40 h-[2] bg-secondary"></span>
        <Link
          href="/"
          className="text-silver text-center text-lg xl:text-xl font-light flex items-center justify-center mt-10"
        >
          14/345 Grand Aston, Sydney, Australia
        </Link>
        <Link
          href="mailto:hello@irfansadiq.pk"
          className="text-silver text-lg xl:text-xl font-light flex items-center justify-center mt-2"
        >
          hello@irfansadiq.pk
        </Link>
        <Link
          href="tel:00923087884179"
          className="text-silver text-lg xl:text-xl font-light flex items-center justify-center mt-2"
        >
          +92 3087884179
        </Link>
        <div className="flex my-5 justify-between">
          <Link
            href="https://www.facebook.com/Irfannsadiq/"
            className="mr-5 text-secondary hover:text-white"
          >
            <TiSocialFacebook size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/irfan-sadiq"
            className="mr-5 text-secondary hover:text-white"
          >
            <TiSocialLinkedin size={30} />
          </Link>
          <Link
            href="https://github.com/irfansadiq030"
            className="mr-5 text-secondary hover:text-white"
          >
            <RiGithubLine size={25} />
          </Link>
          <Link
            href="https://www.fiverr.com/users/irfan_sadiq786"
            className="mr-5 text-secondary hover:text-white"
          >
            <TbBrandFiverr size={25} />
          </Link>
          <Link
            href="https://upwork.com/freelancers/muhammadirfan93"
            className="mr-3 text-secondary hover:text-white"
          >
            <FaUpwork size={25} />
          </Link>
        </div>
        <p className="flex flex-wrap text-sm text-silver font-light">
          Designed with
          <span className="text-white mx-1">
            <RiHeartFill size={18} />
          </span>
          by irfan sadiq
        </p>
      </div>
    </footer>
  );
};

export default Footer;
