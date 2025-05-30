import React from "react";
import CommonWrapperSection from "@/components/section/hoc/CommonWrapperSection";
import Image from "next/image";
import images from "@/public";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";
const Blog = () => {
  return (
    <CommonWrapperSection
      topheading={"Date: 2023-10-01"}
      heading={"Blog Title Goes Here"}
      subheading={
        "This is a brief introduction to the blog post. It provides an overview of the content and sets the stage for the discussion that follows."
      }
      className="blog-post"
    >
      <div className="blog content">
        <div className="blog-image w-full h-[350px] md:h-[450px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={images.blog}
            width={800}
            height={400}
            alt="Blog Image"
            objectFit="cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="blog w-full description mt-16">
          <p className=" mt-4 hero-paragraph max-w-none text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-4 hero-paragraph max-w-none text-gray-700">
            More content can be added here to elaborate on the topic discussed
            in the blog post. This section can include additional paragraphs,
            images, or any other relevant information.
          </p>
        </div>
        <div className="tags mt-16">
          <h3 className="hero-subheading font-semibold mt-8">Tags</h3>
          <ul className="flex flex-wrap gap-2 mt-4">
            <li className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              #Cybersecurity
            </li>
            <li className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              #DataProtection
            </li>
            <li className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              #Blog
            </li>
          </ul>
        </div>
        {/* Recommended */}
        <div className="recommended mt-16">
          <h3 className="hero-subheading font-semibold">
            Recommended Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <BlogCard
              title={"Understanding the Latest Cybersecurity Threats"}
              description={
                "Explore the evolving landscape of cybersecurity threats"
              }
              image={images.p4}
              url={"#"}
            />

            <BlogCard
              title={"Understanding the Latest Cybersecurity Threats"}
              description={
                "Explore the evolving landscape of cybersecurity threats"
              }
              image={images.p4}
              url={"#"}
            />
            <BlogCard
              title={"Understanding the Latest Cybersecurity Threats"}
              description={
                "Explore the evolving landscape of cybersecurity threats"
              }
              image={images.p4}
              url={"#"}
            />
          </div>
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="#"
              className={`${buttonVariants({ variant: "outline" })}  btn mt-8`}
            >
              <span className="hero-paragraph">View More</span>
              <IoArrowForward className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </CommonWrapperSection>
  );
};

export default Blog;
