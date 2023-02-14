import React from "react";
import IntroHeroImage from "./IntroHeroImage";
import IntroInfo from "./IntroInfo";
const InteroSection = () => {
  const img =
    "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg";
  return (
    <div className="relative mt-[80px] h-[60vh] my-6  px-6 rounded-lg grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 max-w-5xl w-[100%] mx-auto">
      <div className="absolute inset-0 h-full rounded-lg overflow-hidden ">
        <div className="bg-black/50 absolute inset-0 h-full"></div>
        <img src={img} alt="" className="w-full h-full rounded object-fill" />
      </div>
      <IntroInfo />
      {/* <IntroHeroImage /> */}
    </div>
  );
};

export default InteroSection;
