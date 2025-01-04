import React from "react";
import PortfolioCard from "./PortfolioCard";


const Portfolio = () => {
  return (
    <section className="py-20 text-center text-white flex flex-col items-center">
      <h3 className="uppercase font-medium text-secondary mb-2 text-xl">
        portfolio
      </h3>
      <h2 className="font-medium mb-2 text-4xl">Selected Works</h2>
      <p className="w-full md:w-4/12 font-light mt-5">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 p-3 md:p-0">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
