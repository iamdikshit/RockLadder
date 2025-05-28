import Image from "next/image";
import images from "@/public";
import { Button } from "@/components/ui/button";
import SmallHeading from "@/components/ui/SmallHeading";

const Hero = () => {
  return (
    <div className="section-container mt-48 lg:mt-0 ">
      <div className="w-full h-screen lg:h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:my-16 ">
        <div className="left-section flex flex-col items-center justify-end lg:items-start lg:justify-center  gap-4">
          <SmallHeading
            textColor={"gradient-text"}
            backgroundColor={"gradient-bg"}
          >
            Cyber Security Solutions
          </SmallHeading>
          <div className="Heading">
            <h1 className="text-center lg:text-start hero-heading  ">
              To Become Cyber-Resilient With{" "}
              <span className="gradient-text">RockLadder</span>
            </h1>
          </div>
          <p className="text-center lg:text-start hero-paragraph text-wrap mx-0 md:mx-16 lg:mx-0 text-gray-400">
            RockLadder is a comprehensive cybersecurity platform designed to
            help organizations enhance their cyber resilience.
          </p>
          <Button className={"gradient-bg text-lg p-8 mt-4 rounded-full"}>
            Let's Connect
          </Button>
        </div>
        <div className="right-section flex inter items-start lg:items-center justify-center">
          <Image
            src={images.hero}
            alt="Hero Image"
            width={800}
            height={800}
            className="hero-image "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
