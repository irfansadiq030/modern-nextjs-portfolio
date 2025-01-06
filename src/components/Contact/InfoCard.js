import React from "react";
import { IoHome } from "react-icons/io5";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import Link from "next/link";
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


const InfoCard = () => {
  return (
    <article className="w-full">
      <h1 className="text-3xl text-white font-medium">
        Get in Touch
      </h1>
      <p className="text-white font-light mt-3 w-9/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="flex items-center mt-10 text-white">
        <span
          className="bg-white w-[40px] h-[40px] rounded-[5px] shadow-sm mr-3 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-1 border-slate-600
"
        >
          <IoHome className="text-primary text-[30px]" />
        </span>
        <h3 className="text-">DHA Phase 5, 14th Street Lahore, PK</h3>
      </div>
      <div className="flex items-center mt-6 text-white">
        <span
          className="bg-white w-[40px] h-[40px] rounded-[5px] shadow-sm mr-3 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-1 border-slate-600
"
        >
          <FaPhone className="text-primary text-[26px]" />
        </span>
        <h3>+92 3087884179</h3>
      </div>
      <div className="flex items-center mt-6 text-white">
        <span
          className="bg-white w-[40px] h-[40px] rounded-[5px] shadow-sm mr-3 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-1 border-slate-600
"
        >
          <FaEnvelope className="text-primary text-[27px]" />
        </span>
        <h3>hello@irfansadiq.pk</h3>
      </div>
      <h2 className="mt-10 text-3xl text-white font-medium">Follow Me</h2>
      <p className="text-white font-light mt-3 w-9/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="flex items-center my-3">
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
    </article>
  );
};

export default InfoCard;
