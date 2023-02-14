import React from "react";
import { Article } from "../types/Blog";
const BlogCard = ({ a }: { a: Article }) => {
  return (
    <div className=" space-y-3 grid grid-cols-4 gap-3  ">
      <section className="col-span-1">
        <img
          src={a?.media}
          alt=""
          className="w-full h-full rounded-lg object-fill"
        />
      </section>
      <section className="col-span-3">
        <p className="text-sm font-mono text-gray-300">{a?.published_date}</p>
        <h2 className="font-meduim text-sm">{a?.title.slice(0, 30) + "..."}</h2>
        <p className="font-sans text-sm text-gray-400">
          {a?.summary.slice(0, 60) + "..."}
        </p>
      </section>
    </div>
  );
};

export default BlogCard;
