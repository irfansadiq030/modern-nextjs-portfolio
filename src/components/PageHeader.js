import React from "react";
import SectionTitle from "./views/SectionTitle";

const PageHeader = ({ introText, mainHeading, subHeading, className }) => {
  return (
    <section
      className={`container mx-auto min-h-[30vh] md:min-h-[40vh] text-center flex flex-col items-center justify-center ${className}`}
    >
      <SectionTitle title={introText} />
      <h2 className="text-4xl xl:text-5xl font-semibold text-white lg:w-8/12">
        {mainHeading}
      </h2>
      <h3 className="text-white text-lg md:text-xl mt-1 capitalize">
        {subHeading}
      </h3>
    </section>
  );
};

export default PageHeader;
