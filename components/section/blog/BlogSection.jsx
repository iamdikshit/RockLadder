import React from "react";
import CommonWrapperSection from "@/components/section/hoc/CommonWrapperSection";
import BlogCard from "./BlogCard";
import images from "@/public";
const BlogSection = () => {
  return (
    <CommonWrapperSection
      topheading={"Latest Insights"}
      heading={"Our Latest Articles"}
      subheading={
        "Stay updated with the latest trends, insights, and expert opinions in the world of cybersecurity through our blog section."
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto mt-10">
        <BlogCard
          title={"Understanding the Latest Cybersecurity Threats"}
          description={
            "Explore the evolving landscape of cybersecurity threats"
          }
          image={images.p4}
          url={"#"}
        />

        <BlogCard
          title={"Best Practices for Data Protection in 2023"}
          description={
            "Learn about the best practices for safeguarding your data against breaches and unauthorized access."
          }
          image={images.services1}
          url={"#"}
        />
        <BlogCard
          title={"The Importance of Cybersecurity Training"}
          description={
            "Discover why cybersecurity training is essential for employees and how it can mitigate risks."
          }
          image={images.p1}
          url={"#"}
        />
      </div>
    </CommonWrapperSection>
  );
};

export default BlogSection;
