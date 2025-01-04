import Image from "next/image";
import React from "react";
import { FaWordpress } from "react-icons/fa6";

const ServiceCard = () => {
  return (
    <article className="bg-charcoal px-10 py-16 rounded-lg shadow-lg flex flex-col items-center">
      <FaWordpress size={85} />
      <h4 className="text-2xl font-semibold mt-3">UI/UX Design</h4>
      <p className="mt-3">
        Quisque sit amet efficitur mauris. Praesent efficitur leo tellus, a
        semper elit mollis accumsan.
      </p>
    </article>
  );
};

export default ServiceCard;
