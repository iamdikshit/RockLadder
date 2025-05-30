import React from "react";
import CommonWrapperSection from "../hoc/CommonWrapperSection";

import BlogCard from "./BlogCard";
import images from "@/public";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { IoArrowForward } from "react-icons/io5";
const AllBlog = () => {
  return (
    <CommonWrapperSection
      topheading={"All Blogs"}
      heading={"Our latest News"}
      subheading={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto mt-10">
        <BlogCard
          title={"Understanding the Latest Cybersecurity Threats"}
          description={
            "Explore the evolving landscape of cybersecurity threats"
          }
          image={images.p4}
          url={"/blog/1"}
        />

        <BlogCard
          title={"Best Practices for Data Protection in 2023"}
          description={
            "Learn about the best practices for safeguarding your data against breaches and unauthorized access."
          }
          image={images.services1}
          url={"/blog/1"}
        />
        <BlogCard
          title={"The Importance of Cybersecurity Training"}
          description={
            "Discover why cybersecurity training is essential for employees and how it can mitigate risks."
          }
          image={images.p1}
          url={"/blog/1"}
        />

        <BlogCard
          title={"Best Practices for Data Protection in 2023"}
          description={
            "Learn about the best practices for safeguarding your data against breaches and unauthorized access."
          }
          image={images.services1}
          url={"/blog/1"}
        />

        <BlogCard
          title={"Best Practices for Data Protection in 2023"}
          description={
            "Learn about the best practices for safeguarding your data against breaches and unauthorized access."
          }
          image={images.services2}
          url={"/blog/1"}
        />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Link
          href="/blog"
          className={`${buttonVariants({ variant: "outline" })}  btn mt-8`}
        >
          <span className="hero-paragraph">View More</span>
          <IoArrowForward className="w-6 h-6" />
        </Link>
      </div>
    </CommonWrapperSection>
  );
};

export default AllBlog;
