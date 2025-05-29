import images from "@/public";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";
const BlogCard = ({ title, description, url, image }) => {
  return (
    <div className="w-full sm:max-w-sm flex flex-col h-full rounded-3xl shadow-lg overflow-hidden bg-white">
      {/* Image */}
      <div className="h-[300px] w-full">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 ">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        <p className="mt-2 text-gray-700 flex-1">{description}</p>

        <Link
          href="#"
          className={`${buttonVariants({ variant: "default" })}  btn mt-8`}
        >
          <span className="hero-paragraph">Read More</span>
          <IoArrowForward className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
