import React from "react";
import ServiceCard from "./ServiceCard";
import SectionTitle from "../views/SectionTitle";
import { FaWordpress, FaReact, FaLaravel } from "react-icons/fa6";

const Services = () => {
  return (
    <section className="mt-24 px-5 text-center text-white flex flex-col items-center">
      <SectionTitle title="services" />
      <h2 className="font-medium mb-2 text-3xl lg:text-4xl">
        What I Can Do for You
      </h2>
      <p className="w-full md:w-12/12 lg:w-9/12 xl:10/12 2xl:w-5/12 font-light mt-3 lg:mt-3">
        I offer a range of professional web development services, from creating
        custom websites to building scalable web applications. With expertise in
        WordPress, Laravel, and ReactJS, I deliver solutions tailored to your
        needs. Let’s turn your ideas into reality!
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:p-0">
        <ServiceCard
          Icon={FaWordpress}
          title="Wordpress Development"
          description="Custom WordPress solutions for blogs, business websites, and e-commerce stores. Responsive, SEO-friendly, and easy to manage—crafted just for you."
        />
        <ServiceCard
          Icon={FaReact}
          title="ReactJS Development"
          description="Create fast, dynamic user interfaces with ReactJS. I specialize in building seamless, interactive web applications for a superior user experience."
        />
        <ServiceCard
          Icon={FaLaravel}
          title="Laravel Development"
          description="Build secure, scalable web applications with Laravel. From APIs to custom backends, I deliver efficient solutions to power your business."
        />
      </div>
    </section>
  );
};

export default Services;
