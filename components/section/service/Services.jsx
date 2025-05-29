import React from "react";
import ServicesCard from "./ServicesCard";
import CommonWrapperSection from "../hoc/CommonWrapperSection";
import images from "@/public";
const Services = () => {
  return (
    <CommonWrapperSection
      topheading={"Our Popular Services"}
      heading={"We Provide Best Services"}
      subheading={
        "We offer a wide range of services to help you achieve your business goals. From consulting to implementation, our team of experts is here to support you every step of the way. Whether you need assistance with cybersecurity, risk management, or IT solutions, we have the expertise to deliver results."
      }
    >
      <div className="services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto mt-10">
        <ServicesCard
          heading={"Cybersecurity Consulting"}
          subheading={
            "Expert guidance to protect your business from cyber threats."
          }
          listOfServices={[
            "Risk Assessment",
            "Compliance Support",
            "Incident Response Planning",
          ]}
          url={images.services1}
          // Replace with actual image URL
        />
        <ServicesCard
          heading={"MSSP"}
          subheading={
            "Comprehensive solutions to safeguard your sensitive data."
          }
          listOfServices={[
            "Threat Intel",
            "MDR/XDR as a Service",
            "SOC as a Service",
            "Cloud Security",
            "Identity Services",
          ]}
          url={images.services2}
        />
        <ServicesCard
          heading={"Testing As a Service"}
          subheading={
            "Proactive testing to identify vulnerabilities before they become threats."
          }
          listOfServices={[
            "VAPT Services",
            "Network Performance & Data Centre Performance Testing",
            "Application & Security Tools Testing",
            "Cloud Network Assessment",
            "Breach & Attack Simulation",
          ]}
          url={images.services3}
        />
      </div>
    </CommonWrapperSection>
  );
};

export default Services;
