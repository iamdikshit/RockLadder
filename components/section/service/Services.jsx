import React from "react";
import ServicesCard from "./ServicesCard";
import CommonWrapperSection from "../hoc/CommonWrapperSection";
const Services = () => {
  return (
    <CommonWrapperSection
      topheading={"Our Popular Services"}
      heading={"We Provide Best Services"}
      subheading={
        "We offer a wide range of services to help you achieve your business goals. From consulting to implementation, our team of experts is here to support you every step of the way. Whether you need assistance with cybersecurity, risk management, or IT solutions, we have the expertise to deliver results."
      }
    >
      <div className="services flex flex-wrap items-center justify-center gap-8">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </CommonWrapperSection>
  );
};

export default Services;
