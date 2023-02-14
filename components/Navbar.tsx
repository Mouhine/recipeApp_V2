import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";

const Navbar = () => {
  const img =
    "https://cdn-icons-png.flaticon.com/512/1240/1240696.png?w=740&t=st=1674139369~exp=1674139969~hmac=4d2c5fb402e267d4a99f99fae5a9533a7ab9a17768b47b9d96ba580d84328ee3";
  return (
    <nav className="fixed flex py-2 z-50 top-0 items-center justify-between px-4 max-w-5xl w-[95%] mx-auto left-[50%] border-b shadow rounded -translate-x-[50%]  bg-white">
      <Link href={"/"}>
        <div className="w-8 h-8 rounded-full ">
          <img src={img} alt="" className="w-full rounded-full object-fill" />
        </div>
      </Link>
      <ul className="flex items-center space-x-4">
        <Link href={"/Search"}>
          <li>Search</li>
        </Link>
        <Link href={"/Blogs"}>
          <li>Blogs</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
