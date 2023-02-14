import React, { useEffect, useState } from "react";
import { Article } from "../types/Blog";
import { getBlogs } from "../utils";
import BlogHeroSection from "../components/BlogHeroSection";
import Link from "next/link";
const Blogs = () => {
  const [blogs, setBlogs] = useState<Article[] | []>([]);
  useEffect(() => {
    getBlogs(setBlogs);
  }, []);
  return (
    <div className="mt-[80px] max-w-5xl w-[90%] mx-auto  ">
      <section className="grid grid-cols-12 gap-3">
        {blogs.map((b, i) => {
          return (
            <Link
              href={b.link}
              className="lg:col-span-4 md:col-span-6 col-span-12"
            >
              <div className="border p-4 rounded-lg ">
                <BlogHeroSection blog={b} />
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
