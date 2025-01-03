import React from "react";
import Button from "./views/Button";
import { LuMail } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[url('/lines-bg.png')] bg-contain bg-no-repeat bg-center min-h-[80vh] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-5 container items-top mx-auto h-full pt-20">
        <div className="text-white">
          <h3 className="uppercase font-medium text-secondary mb-2 text-xl">
            Irfan sadiq
          </h3>
          <h1 className="w-full text-5xl font-bold loading-relaxed">
            Hello👋,
          </h1>
          <h1 className="w-full text-6xl font-bold loading-relaxed mt-6">
            I&apos;m irfan sadiQ
          </h1>
          <h2 className="w-full text-6xl font-normal">
            Full Stack developer
            <span className="text-secondary">.</span>
          </h2>
          <p className="w-full md:w-8/12 my-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <Button bgColor={true} btnText="Hire me" Icon={LuMail} />
          <Button
            bgColor={false}
            btnText="Download CV"
            Icon={IoDocumentTextOutline}
          />
        </div>
        <div className=" flex flex-col justify-end items-end relative">
          <div className="rounded-full w-[500] h-[500] bg-charcoal"></div>
          <Image className="absolute -bottom-14 -right-8" src="/irfans-dp.png" width={550} height={550} alt="irfan sadiq profile picture " />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
