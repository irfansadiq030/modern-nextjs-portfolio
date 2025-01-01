import Link from "next/link";
import React from "react";

const Button = ({ btnText, bgColor, Icon }) => {
  return (
    <Link href="/">
      <button
        className={`${
          bgColor ? "bg-accent" : "bg-transparent"
        } px-10 py-3 rounded-[5] text-xl inline-flex items-center uppercase `}
      >
        <span className="mr-2">
          <Icon size={20} />
        </span>
        {btnText}
      </button>
    </Link>
  );
};

export default Button;
