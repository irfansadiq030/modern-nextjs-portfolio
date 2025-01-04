import React from "react";

const SectionTitle = ({ title = "" }) => {
  return (
    <h3 className="uppercase font-medium text-secondary mb-2 md:text-xl text-sm">
      {title}
    </h3>
  );
};

export default SectionTitle;
