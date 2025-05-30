import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoCheckmark } from "react-icons/io5";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
const ServicesCard = ({ heading, subheading, listOfServices, url }) => {
  return (
    <Card
      className={
        "group w-full  hover:bg-primary-foreground rounded-sm flex flex-col justify-center gap-8 transition-all duration-300 ease-in-out hover:scale-105"
      }
    >
      <CardHeader
        className={"flex flex-col items-center justify-center flex-1"}
      >
        <Image src={url} width={500} height={500} alt="card pic" />
        <CardTitle
          className={
            "hero-paragraph group-hover:text-secondary-foreground text-center "
          }
        >
          {heading || "Expert Consulting Services"}
        </CardTitle>
        <CardDescription
          className={
            "hero-subparagraph mt-2 text-center group-hover:text-secondary-foreground"
          }
        >
          {subheading ||
            "We provide expert consulting services to help you navigate the complex world of cybersecurity."}
        </CardDescription>
      </CardHeader>
      <CardContent
        className={
          "mx-auto   text-slate-800 group-hover:text-secondary-foreground hero-subparagraph  flex-1 "
        }
      >
        <ul className="flex flex-col gap-4">
          {listOfServices?.map((service, index) => (
            <li key={index} className="flex items-start gap-2">
              <IoCheckmark className="flex-shrink-0 text-green-500 w-6 h-6" />
              <p className="">{service}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className={"flex justify-center  flex-1 "}>
        <Link
          href="#"
          className={`${buttonVariants({
            variant: "default",
          })} w-full btn mt-auto `}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServicesCard;
