import React from "react";
import PortfolioCard from "./PortfolioCard";
import SectionTitle from "../views/SectionTitle";

const Portfolio = () => {
  return (
    <section className="mt-24 px-5 text-center text-white flex flex-col items-center">
      <SectionTitle title="portfolio" />
      <h2 className="font-medium mt-2 text-4xl">Recent Projects</h2>
      <p className="w-full md:w-8/12 lg:w-5/12 font-light mt-3">
        Take a look at some of my recent work. I’ve had the opportunity to
        collaborate with amazing clients, bringing their digital visions to life
        with custom web solutions.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
