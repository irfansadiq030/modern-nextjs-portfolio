import Image from "next/image";
import React from "react";
import Button from "../views/Button";

import { IoDocumentTextOutline } from "react-icons/io5";

const PortfolioCard = () => {
  return (
    <article className="bg-charcoal rounded-[20px] overflow-hidden text-start">
      <Image
        src="https://picsum.photos/1200/600"
        width={500}
        height={600}
        alt="portfolio image"
        style={{ width: "100%" }}
      />
      <div className="p-5 lg:p-8">
        <h3 className="text-white font-medium text-xl mb-2">
          UI/UX Website Rameo Studio
        </h3>
        <p className="text-white font-light">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <Button
          bgColor={false}
          btnText="see Project"
          Icon={IoDocumentTextOutline}
          className="px-0 mt-5 text-md hover:text-secondary"
        />
      </div>
    </article>
  );
};

export default PortfolioCard;
