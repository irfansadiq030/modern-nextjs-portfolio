import React from "react";
import SectionTitle from "../views/SectionTitle";
import Button from "../views/Button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section className="mt-24 w-full px-5 xl:px-0 container mx-auto min-h-[200px] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center md:items-start justify-center relative">
          <div className="rounded-full w-[350px] h-[350px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-accent"></div>
          <Image
            className="absolute w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] object-cover md:left-0 lg:left-5 xl:left-16 2xl:left-40"
            src="/irfans-dp.png"
            width={550}
            height={550}
            alt="irfan sadiq profile picture "
          />
          <div className="h-[50px] w-[130px] absolute -left-4 top-24 bg-[#8175F2] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-75 flex items-center ">
            <IoCheckmarkCircle className="text-[30px] mr-1"/>
            <div>
                <h4 className="text-sm font-semibold">99%</h4>
                <p className="text-xs font-light">Satisfied User</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-5">
          <SectionTitle title="About me" />
          <h2 className="font-medium mt-2 text-4xl text-center">
            Who is Irfan Sadiq?
          </h2>
          <p className="text-center md:text-left w-full md:w-12/12 lg:w-9/12 font-light mt-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <article className="flex items-center">
              <div className="rounded-[5px] shadow-sm bg-charcoal w-[60px] h-[60px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px] mr-5"></div>
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xs xl:text-xl font-medium">
                  Adlance Digital LTD.
                </h3>
                <span className="text-sm lg:text-xs xl:text-lg font-light">
                  PHP Developer - 2022-Present
                </span>
              </div>
            </article>
            <article className="flex items-center">
              <div className="rounded-[5px] shadow-sm bg-charcoal w-[60px] h-[60px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px] mr-5"></div>
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xs xl:text-xl font-medium">
                  Adlance Digital LTD.
                </h3>
                <span className="text-sm lg:text-xs xl:text-lg font-light">
                  PHP Developer - 2022-Present
                </span>
              </div>
            </article>
            <article className="flex items-center">
              <div className="rounded-[5px] shadow-sm bg-charcoal w-[60px] h-[60px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px] mr-5"></div>
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xs xl:text-xl font-medium">
                  Adlance Digital LTD.
                </h3>
                <span className="text-sm lg:text-xs xl:text-lg font-light">
                  PHP Developer - 2022-Present
                </span>
              </div>
            </article>
            <article className="flex items-center">
              <div className="rounded-[5px] shadow-sm bg-charcoal w-[60px] h-[60px] lg:w-[50px] lg:h-[50px] xl:w-[70px] xl:h-[70px] mr-5"></div>
              <div className="flex flex-col">
                <h3 className="text-lg lg:text-xs xl:text-xl font-medium">
                  Adlance Digital LTD.
                </h3>
                <span className="text-sm lg:text-xs xl:text-lg font-light">
                  PHP Developer - 2022-Present
                </span>
              </div>
            </article>
          </div>
          <Button
            Icon={FaArrowRightLong}
            iconPosition="right"
            bgColor={true}
            btnText="Know More"
            className="mt-8 bg-accent text-white px-5 py-2 lg:px-10 lg:py-3 text-md lg:text-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
