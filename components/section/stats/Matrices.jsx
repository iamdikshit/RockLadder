import React from "react";

const Matrices = ({ title, description }) => {
  return (
    <div className="stat-item flex flex-col items-start justify-center p-4 border-b-1 md:border-l-1 md:border-b-0 border-lightBlue">
      <h2 className="text-7xl hero-heading text-secondary  font-bold">
        {title}
      </h2>
      <p className="text-secondary hero-paragraph">{description}</p>
    </div>
  );
};

export default Matrices;
