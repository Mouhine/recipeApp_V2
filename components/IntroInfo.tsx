import Link from "next/link";
import React from "react";

const IntroInfo = () => {
  return (
    <div className="col-span-3 grid place-content-center  h-full z-40 ">
      <section className=" mx-auto space-y-6 ">
        <div>
          <h1 className="text-4xl  text-orange-500 font-semibold drop-shadow">
            Delicious Dishes
          </h1>
          <h2 className="text-4xl font-semibold drop-shadow text-white ">
            For Food Lovers
          </h2>
        </div>
        <p className="text-sm font-mono text-gray-300 font-semibold drop-shadow-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perferendis saepe eum sapiente esse? Nostrum! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Est, velit?
        </p>
        <Link href={"/Search"}>
          <button className=" text-white font-semibold px-16 py-3 my-6   rounded-full bg-orange-500 ">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default IntroInfo;
