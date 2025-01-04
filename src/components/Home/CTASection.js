import React from "react";
import Button from "../views/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="mt-5 mb-32 container mx-auto bg-accent bg-[url('/white-lines.png')] bg-cover bg-no-repeat bg-center min-h-[200px] w-full rounded-[20px] text-white">
      <div className="h-[400] container mx-auto flex flex-col justify-center items-center text-center relative">
        <Image
          src={"/white-sparkle.svg"}
          width={70}
          height={70}
          alt="icon"
          className="absolute top-5 right-40"
        />
        <h2 className="text-6xl font-bold w-full md:w-8/12 leading-[1.3]">
          Discover How Design Can Help Your Business
        </h2>
        <Button
          className="mt-5 bg-white text-accent px-10 py-3 text-xl"
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
          className="absolute bottom-10 left-60"
        />
      </div>
    </section>
  );
};

export default CTASection;
