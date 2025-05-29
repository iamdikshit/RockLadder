"use client";
import Image from "next/image";
import images from "@/public/index";
import { IoAppsSharp, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Menu from "./Menu";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const menuToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className={"w-full bg-transparent bg-opacity-10 relative "}>
      <nav className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"}>
        <div className="flex justify-between items-center h-16">
          {/*Logo*/}
          <div className={"logo"}>
            <h1>LOGO</h1>
            {/* <Image src={images.logo} width={80} height={80} alt="logo"/> */}
          </div>

          {/*  Mobile menu*/}

          <div
            id="mobile-menu"
            className=" hidden md:flex px-4  justify-center items-center "
          >
            <Menu />
          </div>

          {/*  Mobile button  */}
          <div className={"mobile-button  md:hidden z-70"}>
            <button
              onClick={menuToggle}
              className={`menu ${toggle === false ? "hidden" : ""}`}
            >
              <IoAppsSharp className="h-6 w-6" />
            </button>
            <button
              onClick={menuToggle}
              className={`menu ${toggle === true ? "hidden" : ""}`}
            >
              <IoCloseSharp className={"h-6 w-6"} />
            </button>
          </div>

          {/*    Contact us button*/}
          <Button
            className={
              " hidden md:block  text-lg px-4 rounded-full  h-auto py-2"
            }
          >
            Contact Us
          </Button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 w-full h-screen bg-white/70 backdrop-blur-md px-4 pb-4 flex items-center justify-center z-50 transition-all duration-300 ${
          toggle ? "hidden" : ""
        }`}
      >
        <Menu type={"mobile"} />
      </div>
    </header>
  );
};

export default Header;
