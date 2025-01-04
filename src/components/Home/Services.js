import React from "react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../views/SectionTitle";

const Services = () => {
  return (
    <section className="mt-24 px-5 text-center text-white flex flex-col items-center">
      <SectionTitle title="services" />
      <h2 className="font-medium mb-2 text-3xl">
        Making Magic Happen for Your Business
      </h2>
      <p className="w-full md:w-8/12 lg:w-6/12 font-light mt-3 lg:mt-3">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:p-0">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
