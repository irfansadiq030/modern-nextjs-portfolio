import Link from "next/link";
import React from "react";

const Button = ({ btnText, bgColor, Icon = null, href = "/", className = "", type = "button", iconPosition = "left", ...props }) => {
  return (
    <Link href={href}>
      <button
        type={type}
        className={`${
          bgColor ? "bg-accent" : "bg-transparent"
        } rounded-[5] inline-flex items-center uppercase ${className}`}
        {...props}
      >
        {iconPosition === "left" && Icon && (
          <span className="mr-2">
            <Icon size={20} />
          </span>
        )}
        {btnText}
        {iconPosition === "right" && Icon && (
          <span className="ml-2">
            <Icon size={20} />
          </span>
        )}
      </button>
    </Link>
  );
};

export default Button;
