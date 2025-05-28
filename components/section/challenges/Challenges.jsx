"use client";
import React, { useState } from "react";
import CommonWrapperSection from "../hoc/CommonWrapperSection";
import challengesData from "@/data/challengesData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
const Challenges = () => {
  const [activeDescription, setActiveDescription] = useState(
    challengesData[0].description
  );
  return (
    <CommonWrapperSection
      topheading={"Today’s Cyber Security Challenges"}
      heading={"Challenges We Solve"}
      subheading={
        "We address the most pressing cybersecurity challenges faced by organizations today, ensuring robust protection against evolving threats."
      }
    >
      <div className="challenges section grid grid-cols-1 md:grid-cols-2 mx-auto mt-10">
        <div className="left flex-col w-full    ">
          {challengesData.map((challenge, index) => (
            <div key={`challenge-${index}`}>
              <div
                key={`item-${index}`}
                className="group challenge-item flex-1  flex-col item-center justify-center  cursor-pointer  hover:bg-gray-100 transition-colors duration-300 "
                onMouseEnter={() => setActiveDescription(challenge.description)}
              >
                <div
                  key={`title-${index}`}
                  className={`title text-primary-foreground group-hover:text-start transition-all ease-in-out duration-300 text-2xl  font-semibold p-4 md:pl-4 md:pr-0 ${
                    activeDescription === challenge.description
                      ? "text-start rounded-l-lg md:bg-[#dad8ec]"
                      : " "
                  } md:text-start md:-translate-x-0 `}
                >
                  {challenge.title}
                </div>
                <div
                  key={`description-${index}`}
                  className={`description  overflow-hidden  transition-all 
                  duration-300 ease-in text-start hero-paragraph  text-dark transform ${
                    activeDescription === challenge.description
                      ? "max-h-40 opacity-100 pl-4 pb-8"
                      : "max-h-0 opacity-0"
                  } md:hidden  `}
                >
                  {challenge.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="animate-in right hidden md:flex items-center justify-center p-6 hero-paragraph  bg-light-blue text-center text-dark rounded-r-lg">
          {activeDescription}
        </div>
      </div>
    </CommonWrapperSection>
  );
};

export default Challenges;
