import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import images from "@/public";
import CommonWrapperSection from "../hoc/CommonWrapperSection";
import teamData from "@/data/teamData"; // Assuming you have a data file for team members
const Team = () => {
  return (
    <div className="w-full h-auto curved-rectangle bg-primary-foreground flex items-center justify-center mt-24">
      <CommonWrapperSection
        topheading={"Meet Our Team"}
        subheading={
          "We are a team of dedicated professionals committed to delivering excellence in cybersecurity solutions."
        }
        heading={"Our Team Members"}
        dark={true}
      >
        <div className="w-full max-w-xs md:max-w-7xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start", // Aligns cards to the left
            }}
          >
            <CarouselContent>
              {teamData.map((member, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className=" h-full p-0 overflow-hidden rounded-3xl">
                      <div className="relative aspect-square">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="w-full object-cover p-2 rounded-t-3xl" /* Ensures image covers the space */
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <CardContent className="flex flex-col  items-center justify-center mx-2 pb-6">
                        <span className="text-2xl md:text-3xl font-semibold">
                          {member.name}
                        </span>
                        <p className="hero-paragraph text-gray-600 mt-2">
                          {member.position}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className={"-left-[15px] lg:-left-20"} />
            <CarouselNext className={"-right-[15px] lg:-right-20"} />
          </Carousel>
        </div>
      </CommonWrapperSection>
    </div>
  );
};

export default Team;

/*
<Image
                        src={member.image}
                        width={300}
                        height={400}
                        className="w-full h-[450px] sm:h-[350px] md:h-[250px]  object-cover"
                        loading="lazy"
                        objectFit="cover"
                        alt={`${member.name}'s photo`}
                      />
*/
