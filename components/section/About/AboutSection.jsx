import images from "@/public";
import Image from "next/image";

import SmallHeading from "@/components/ui/SmallHeading.jsx";
import {
  IoArrowForward,
  IoBulb,
  IoPeopleSharp,
  IoPrism,
  IoShieldCheckmark,
} from "react-icons/io5";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
const AboutSection = () => {
  return (
    <div className="w-full h-auto curved-rectangle bg-primary-foreground flex items-center mt-24">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center py-16 pb-32">
        <div className="left mx-auto">
          <Image src={images.hero} width={500} height={500} alt="About us" />
        </div>
        <div className="right ">
          <SmallHeading textColor={"text-white"} backgroundColor={"bg-white"}>
            About Our Company
          </SmallHeading>
          <h1 className="hero-subheading text-secondary-foreground mt-4">
            RockLadder: Your Partner in Cyber Resilience
          </h1>
          <p className="hero-subparagraph text-light mt-4">
            At RockLadder, we are dedicated to empowering businesses with the
            tools and expertise they need to navigate the complex landscape of
            cybersecurity.
          </p>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-2 ">
              <span className=" border border-secondary-foreground rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <IoBulb className="text-secondary-foreground w-6 h-6" />
              </span>

              <p className="hero-paragraph text-secondary-foreground">
                Expert Problem Solve
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <span className=" border border-secondary-foreground rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <IoShieldCheckmark className="text-secondary-foreground w-6 h-6" />
              </span>

              <p className="hero-paragraph text-secondary-foreground">
                Security Management
              </p>
            </div>

            <div className="flex items-center gap-2 ">
              <span className=" border border-secondary-foreground rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <IoPeopleSharp className="text-secondary-foreground w-6 h-6" />
              </span>

              <p className="hero-paragraph text-secondary-foreground">
                Expert Team Members
              </p>
            </div>

            <div className="flex items-center gap-2 ">
              <span className=" border border-secondary-foreground rounded-full p-2 w-10 h-10 flex items-center justify-center">
                <IoPrism className="text-secondary-foreground w-6 h-6" />
              </span>

              <p className="hero-paragraph text-secondary-foreground">
                Identifying Threats Quick
              </p>
            </div>
          </div>

          <Link
            href="#"
            className={`${buttonVariants({ variant: "outline" })}  btn mt-8`}
          >
            <span className="hero-paragraph">Learn More</span>
            <IoArrowForward className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
