import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Image from "next/image";
import images from "@/public";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
const ServicesCard = () => {
  return (
    <Card
      className={
        "group w-full sm:w-[350px] hover:bg-primary-foreground rounded-sm flex flex-col justify-center gap-8 transition-all duration-300 ease-in-out hover:scale-105"
      }
    >
      <CardHeader className={"flex flex-col items-center justify-center"}>
        <Image src={images.hero} width={500} height={500} alt="card pic" />
        <CardTitle
          className={"hero-paragraph group-hover:text-secondary-foreground "}
        >
          Consulting
        </CardTitle>
        <CardDescription
          className={
            "hero-subparagraph text-center group-hover:text-secondary-foreground"
          }
        >
          We provide expert consulting services to help you navigate complex
          challenges and achieve your business goals.
        </CardDescription>
      </CardHeader>
      <CardContent
        className={
          "mx-auto  text-slate-800 group-hover:text-secondary-foreground hero-subparagraph  "
        }
      >
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-2">
            <IoCheckmarkDoneSharp />
            <p>CISO As A Service</p>
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkDoneSharp />
            <p>Risk Threat Assessments</p>
          </li>
          <li className="flex items-center gap-2">
            <IoCheckmarkDoneSharp />
            <p>IT Security Certifications</p>
          </li>
        </ul>
      </CardContent>
      <CardFooter className={"flex justify-center "}>
        <Link
          href="#"
          className={`${buttonVariants({ variant: "default" })} w-full btn`}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServicesCard;
