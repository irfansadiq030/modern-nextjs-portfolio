import Image from "next/image";
import React from "react";
import { FaWordpress, FaReact } from "react-icons/fa6";

const ServiceCard = ({ Icon, title = "Service Title", description="" }) => {
  return (
    <article className="bg-charcoal px-5 md:px-3 min-h-[320px] md:min-h-[300px] lg:min-h-[350px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
      <Icon className="text-[85px] md:text-[60px] lg:text-[75px]" />
      <h4 className="text-2xl md:text-xl lg:text-3xl font-semibold mt-8 md:mt-5">
        {title}
      </h4>
      <p className="mt-5 text-sm lg:text-md xl:text-lg font-light">
       {description}
      </p>
    </article>
  );
};

export default ServiceCard;
