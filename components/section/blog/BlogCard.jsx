import images from "@/public";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";
const BlogCard = ({ title, description, url, image }) => {
  return (
    <div className="w-full sm:max-w-sm rounded-3xl shadow-lg">
      <div className="flex flex-col items-center justify-between  ">
        <Image
          src={image}
          alt={title}
          width={500}
          height={800}
          className="w-full h-[300px] object-cover " /* Ensures image covers the space */
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="p-4 mt-auto">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 my-8">{description}</p>
          <Link
            href="#"
            className={`${buttonVariants({ variant: "outline" })}  btn mt-8`}
          >
            <span className="hero-paragraph">Read More</span>
            <IoArrowForward className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
