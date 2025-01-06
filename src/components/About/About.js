import React from "react";
import SectionTitle from "../views/SectionTitle";
import Button from "../views/Button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";

const About = () => {
  return (
    <section className="mt-24 w-full px-5 xl:px-0 container mx-auto min-h-[200px] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center md:items-start justify-center relative">
          <div className="rounded-full w-[350px] h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-accent"></div>
          <Image
            className="absolute w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] object-cover md:left-0 lg:left-5 xl:left-1 2xl:-left-5"
            src="/irfans-dp.png"
            width={550}
            height={550}
            alt="irfan sadiq profile picture "
          />
          <div className="h-[50px] w-[130px] absolute -left-4 top-24 md:top-56 lg:top-36 bg-[#8175F2] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-75 flex items-center shadow-md">
            <IoCheckmarkCircle className="text-[30px] mr-1" />
            <div>
              <h4 className="text-sm font-semibold">99%</h4>
              <p className="text-xs font-light">Satisfied User</p>
            </div>
          </div>
          <div className="h-[50px] w-[130px] absolute right-0 bottom-12 md:bottom-44 lg:bottom-28 lg:right-12 xl:right-48 2xl:right-80 2xl:bottom-20 bg-[#787878] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-75 flex items-center shadow-md">
            <IoCheckmarkCircle className="text-[30px] mr-1" />
            <div>
              <h4 className="text-sm font-semibold">100%</h4>
              <p className="text-xs font-light">Top Rated</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-5">
          <SectionTitle title="About me" />
          <h2 className="font-medium mt-2 text-4xl text-center">
            Who is Irfan Sadiq?
          </h2>
          <p className="text-center md:text-left w-full lg:w-12/12 font-light mt-3">
            I’m Irfan Sadiq, a passionate Full Stack Developer with over 5 years
            of experience turning ideas into powerful digital solutions. My
            journey began with WordPress, and over the years, I’ve mastered a
            range of technologies, including HTML, CSS3, JavaScript, ReactJS,
            PHP, Laravel, and MySQL. 
            
          </p>
          <p className="text-center md:text-left w-full lg:w-12/12 font-light mt-3">
            From achieving Level 2 Seller status on
            Fiverr to helping businesses on Upwork, I’ve built a reputation for
            delivering innovative, user-focused, and scalable web solutions. If
            you’re looking for a reliable developer to bring your vision to
            life, let’s connect and create something extraordinary together!
          </p>
          <Button
            href="/contact"
            Icon={FaArrowRightLong}
            iconPosition="right"
            bgColor={true}
            btnText="Contact Me"
            className="mt-8 bg-accent text-white px-5 py-2 lg:px-10 lg:py-3 text-md lg:text-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
