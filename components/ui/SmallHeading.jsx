import React from "react";

const SmallHeading = ({ textColor, backgroundColor, children }) => {
  return (
    <div className="flex items-center gap-2 ">
      <div className={`w-6 h-1 ${backgroundColor}`}></div>
      <h3 className={`font-medium hero-subparagraph ${textColor} `}>
        {children}
      </h3>
    </div>
  );
};

export default SmallHeading;
