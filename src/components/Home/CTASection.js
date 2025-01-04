import React from "react";
import Button from "../views/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="mt-24 mb-24 px-5 xl:px-0 container mx-auto min-h-[200px] w-full  text-white">
      <div className="h-[350px] lg:h-[350px] xl:h-[400px] bg-accent bg-[url('/white-lines.png')] bg-cover bg-no-repeat bg-center container mx-auto rounded-[20px] flex flex-col justify-center items-center text-center relative">
        <Image
          src={"/white-sparkle.svg"}
          width={70}
          height={70}
          alt="icon"
          className="absolute top-5 right-48 w-[50px] h-[50px]"
        />
        <h2 className="text-4xl lg:text-5xl font-bold w-full md:w-8/12 leading-[1.3]">
          Discover How Design Can Help Your Business
        </h2>
        <Button
          className="mt-8 bg-white text-accent px-5 py-2 lg:px-10 lg:py-3 text-md lg:text-xl"
          bgColor={true}
          btnText={"Lets Talk"}
          Icon={FaArrowRightLong}
          iconPosition="right"
        />
        <Image
          src={"/green-sparkle.svg"}
          width={70}
          height={70}
          alt="icon"
          className="absolute bottom-10 left-64 w-[45] h-[45] xl:w-[70] xl:h-[70]"
        />
      </div>
    </section>
  );
};

export default CTASection;
