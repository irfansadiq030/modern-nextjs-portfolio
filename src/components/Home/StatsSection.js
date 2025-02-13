import React from "react";

const StatsSection = () => {
  return (
    <section className="container mx-auto  min-h-[200px] w-full  text-white px-5 xl:px-0 mt-0 md:-mt-0 lg:-mt-2 z-10 relative">
      <div className="grid grid-cols-1 bg-accent bg-[url('/white-lines.png')] bg-cover bg-no-repeat bg-center rounded-[20px] md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-5 h-full justify-items-center container mx-auto items-center">
        <article className="min-w-48 min-h-[100px] md:min-h-[200px] flex flex-col items-center justify-center">
          <h2 className="font-bold text-4xl md:text-6xl">100+</h2>
          <h3 className="font-medium text-xl">Projects</h3>
        </article>
        <article className="min-w-48 min-h-[100px] md:min-h-[200px] flex flex-col items-center justify-center">
          <h2 className="font-bold text-4xl md:text-6xl">24+</h2>
          <h3 className="font-medium text-xl">Awards</h3>
        </article>
        <article className="min-w-48 min-h-[100px] md:min-h-[200px] flex flex-col items-center justify-center">
          <h2 className="font-bold text-4xl md:text-6xl">150+</h2>
          <h3 className="font-medium text-xl">Clients</h3>
        </article>
        <article className="min-w-48 min-h-[100px] md:min-h-[200px] flex flex-col items-center justify-center">
          <h2 className="font-bold text-4xl md:text-6xl">5+</h2>
          <h3 className="font-medium text-xl">Experience</h3>
        </article>
      </div>
    </section>
  );
};

export default StatsSection;
