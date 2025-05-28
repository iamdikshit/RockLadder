import React from "react";
import Menu from "../header/Menu";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoHomeSharp,
  IoPhonePortrait,
  IoMail,
  IoSend,
  IoPaperPlane,
} from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return (
    <div>
      <footer className=" bg-primary text-white pt-16 pb-4 ">
        <div className="section-container ">
          <div className="top grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="one flex flex-col gap-8">
              <h1 className="text-4xl font-bold">Logo</h1>
              <p className="hero-subparagraph text-light ">
                RockLadder is a comprehensive cybersecurity platform designed to
                help organizations enhance their cyber resilience. With a suite
                of tools and services, it empowers businesses to proactively
                manage risks, respond to threats, and ensure the security of
                their digital assets.
              </p>
              <ul className="flex gap-4 text-light">
                <Link href={"#"}>
                  <IoLogoFacebook className="w-8 h-8" />
                </Link>

                <Link href={"#"}>
                  <IoLogoInstagram className="w-8 h-8" />
                </Link>

                <Link href={"#"}>
                  <IoLogoLinkedin className="w-8 h-8" />
                </Link>

                <Link href={"#"}>
                  <IoLogoWhatsapp className="w-8 h-8" />
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl  font-semibold">
                Contract
              </h1>
              <ul className="flex flex-col gap-4 mt-4 hero-subparagraph text-light">
                <li className="flex gap-2">
                  <span>
                    <IoHomeSharp className="w-6 h-6" />
                  </span>
                  <p>1901 Thornridge Hawali City 81063</p>
                </li>
                <li className="flex gap-2">
                  <span>
                    <IoPhonePortrait className="w-6 h-6" />
                  </span>
                  <p>+91 9876543210</p>
                </li>
                <li className="flex gap-2">
                  <span>
                    <IoMail className="w-6 h-6" />
                  </span>
                  <p>info@security.com</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl  font-semibold">
                Subscribe to our Newsletter
              </h1>
              <p className="hero-subparagraph text-light">
                This step is crucial for staying updated with the latest.
              </p>
              <div className="w-full sm:max-w-2/3 md:max-w-1/2 lg:max-w-full flex items-center justify-between bg-sky-950 rounded-full">
                <input
                  className="bg-sky-950 text-lg px-4 py-2 rounded-full w-full focus:outline-none"
                  type="text"
                  placeholder="Enter Your Email"
                ></input>
                <button className="bg-primary-foreground text-white px-4 py-4 rounded-full ">
                  <IoPaperPlane />
                </button>
              </div>
            </div>
          </div>
          <Separator className={"my-4 bg-secondary"} />
          <div className="botton flex flex-col items-center justify-center lg:justify-between lg:flex-row  flex-wrap gap-4">
            <div className="right">
              <p className="hero-subparagraph text-light">
                Copyright © {new Date().getFullYear()} RockLadder. All rights
                reserved.
              </p>
            </div>
            <div className="left">
              <Menu footer={true} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
