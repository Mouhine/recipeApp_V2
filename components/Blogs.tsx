import React from "react";
import { useEffect, useState } from "react";
import { Article } from "../types/Blog";
import BlogCard from "./BlogCard";
import BlogHeroSection from "./BlogHeroSection";
import { getBlogs } from "../utils";
import Link from "next/link";
const Blogs = () => {
  const [articles, setArticles] = useState<Article[] | []>([]);
  useEffect(() => {
    getBlogs(setArticles);
    console.log(articles);
  }, []);
  return (
    <section className="max-w-5xl w-[100%] mx-auto my-6">
      <div className="flex items-center justify-between py-4 ">
        <h1 className="text-xl">Blogs</h1>

        <Link href={"/Blogs"}>
          <button className="bg-[#e66337] px-6 py-2 rounded-full font-medium text-white">
            View More
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-8 ">
        <BlogHeroSection blog={articles[0]} />
        <section className=" md:col-span-4 lg:col-span-3 space-y-2">
          {articles?.slice(0, 4).map((a, i) => {
            return <BlogCard a={a} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default Blogs;
