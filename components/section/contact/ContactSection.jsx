import React from "react";
import CommonWrapperSection from "../hoc/CommonWrapperSection";
import ContactForm from "./ContactForm";
import Image from "next/image";
import images from "@/public";
import { IoMail, IoMap, IoPhonePortrait } from "react-icons/io5";
const ContactSection = () => {
  return (
    <CommonWrapperSection
      topheading={"Contact Us"}
      heading={"Get in Touch"}
      subheading={
        "We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible."
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
        <div>
          <ContactForm />
        </div>
        <div className="hidden relative md:block bg-light-blue rounded-sm overflow-hidden ">
          <Image
            src={images.contact}
            width={800}
            height={1000}
            alt="Contact us"
          />
          <div className="absolute w-full h-full top-0 bg-light-blue opacity-30"></div>
          <div className="absolute w-full bottom-0 ml-10 mb-10 rounded-2xl shadow-md bg-white md: max-w-sm  xl:max-w-lg h-auto p-4">
            {/* Email */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-100 rounded-2xl">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-light-blue dark-blue">
                <IoMail className="w-8 h-8  dark-blue " />
              </span>

              <div className="flex flex-col">
                <h2 className="hero-paragraph">Email</h2>
                <p className="hero-subparagraph">example@gmail.com</p>
              </div>
            </div>
            {/* Phone */}

            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-100 rounded-2xl">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-light-blue dark-blue">
                <IoPhonePortrait className="w-8 h-8  dark-blue " />
              </span>

              <div className="flex flex-col">
                <h2 className="hero-paragraph">Phone</h2>
                <p className="hero-subparagraph">+91 9876543210</p>
              </div>
            </div>
            {/* Address */}

            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-100 rounded-2xl">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-light-blue dark-blue">
                <IoMap className="w-8 h-8  dark-blue " />
              </span>

              <div className="flex flex-col">
                <h2 className="hero-paragraph">Address</h2>
                <p className="hero-subparagraph">
                  1234 Street Name, City, State, 24002
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonWrapperSection>
  );
};

export default ContactSection;
