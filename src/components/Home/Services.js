import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="py-20 text-center text-white flex flex-col items-center">
      <h3 className="uppercase font-medium text-secondary mb-2 text-xl">
        services
      </h3>
      <h2 className="font-medium mb-2 text-4xl">
        Making Magic Happen for Your Business
      </h2>
      <p className="w-full md:w-4/12 font-light mt-5">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-3 md:p-0">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default Services;
