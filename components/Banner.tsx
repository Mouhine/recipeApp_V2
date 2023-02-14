import React from "react";

const Banner = ({ cuisine }: { cuisine: string }) => {
  return (
    <div className=" relative max-w-5xl bg-Banner_bg bg-no-repeat bg-center grid  place-content-center overflow-hidden bg-cover h-[500px] rounded-xl  my-6   mx-auto ">
      <div className=" absolute w-full h-full inset-0 bg-black/40"></div>
      <h1 className="text-6xl font-bold text-white text-center z-10 ">
        Welcom to {cuisine?.toUpperCase()} Cuisine
      </h1>
    </div>
  );
};

export default Banner;
