import React from "react";
import { Article } from "../types/Blog";
interface HeroBlog {
  blog: Article;
}
const BlogHeroSection = ({ blog }: HeroBlog) => {
  return (
    <div className=" hidden lg:block md:col-span-2 lg:col-span-3 space-y-2">
      <div>
        <img src={blog?.media} alt="" className="rounded-lg" />
      </div>
      <p className="text-gray-300 text-sm font-mono">{blog?.published_date}</p>
      <h2 className=" font-medium text-xl ">
        {blog?.title.slice(0, 50) + "..."}
      </h2>
      <p className="text-gray-300 font-sans ">
        {blog?.summary.slice(0, 150) + "..."}
      </p>
    </div>
  );
};

export default BlogHeroSection;
