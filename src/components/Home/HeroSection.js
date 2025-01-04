import React from "react";
import Button from "../views/Button";
import { LuMail } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";
import SectionTitle from "../views/SectionTitle";

const HeroSection = () => {
  return (
    <section className="bg-[url('/lines-bg.png')] bg-contain bg-no-repeat bg-center md:min-h-[55vh] lg:min-h-[70vh] xl:min-h-[50vh] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 container items-top mx-auto h-full px-5 xl:px-0 md:pt-20">
        <div className="text-white">
          <SectionTitle title="irfan Sadiq" />
          <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-bold loading-relaxed">
            Hello👋,
          </h1>
          <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-bold loading-relaxed lg:mt-2">
            I&apos;m irfan sadiq
          </h1>
          <h2 className="w-full text-3xl md:text-3xl lg:text-5xl font-normal">
            Full Stack developer
            <span className="text-secondary">.</span>
          </h2>
          <p className="w-full md:w-12/12 lg:w-11/12 my-5 lg:my-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <Button
            bgColor={true}
            btnText="Hire me"
            Icon={LuMail}
            className="px-5 py-2 lg:px-10 lg:py-3 text-md lg:text-xl"
          />
          <Button
            bgColor={false}
            btnText="Download CV"
            Icon={IoDocumentTextOutline}
            className="px-10 py-3 text-xl hidden lg:inline-flex"
          />
        </div>
        <div className=" flex flex-col md:justify-start justify-end md:items-end items-center mt-5 relative">
          <div className="rounded-full w-[350px] h-[350px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] bg-charcoal"></div>
          <Image
            className="absolute -bottom-5 md:bottom-0 md:left-15 w-[400px] h-[400px] md:w-[450px] md:h-[450px] xl:w-[500px] xl:h-[500px] object-cover "
            src="/irfans-dp.png"
            width={550}
            height={550}
            alt="irfan sadiq profile picture "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
