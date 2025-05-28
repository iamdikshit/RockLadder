import React from "react";

const CommonWrapperSection = ({
  topheading,
  heading,
  subheading,
  dark = false,
  children,
}) => {
  return (
    <div className="section-container my-32">
      <div className="Top Heading flex flex-col items-center gap-6  mb-16">
        <h4
          className={`hero-paragraph text-center  ${
            dark ? "text-white" : "text-black"
          }`}
        >
          {topheading ? topheading : "Top Heading"}
        </h4>
        <h1
          className={`hero-heading font-bold text-center  ${
            dark ? "text-secondary-foreground" : "text-primary-foreground"
          }`}
        >
          {heading ? heading : "Heading"}
        </h1>
        <p
          className={` w-full hero-subparagraph text-center   lg:px-28 mt-4  ${
            dark ? "text-light" : "text-dark"
          }`}
        >
          {subheading
            ? subheading
            : "This is a default subheading. You can replace it with your own content."}
        </p>
      </div>

      <div className="bottom">{children}</div>
    </div>
  );
};

export default CommonWrapperSection;
