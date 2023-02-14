import React from "react";

const IntroHeroImage = () => {
  const img =
    " https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg";
  return (
    <div className="col-span-3 grid place-content-center f-full relative ">
      <div className="absolute w-full h-full inset-0 opacity-20 z-10 ">
        <img src="/bg.png" alt="" className="w-full h-full opacity-40" />
      </div>
      <div className="w-[600px] h-[600px] ">
        <img
          src={"/Hero.png"}
          alt=""
          className="w-full h-full rounded-full object-fill drop-shadow-md "
        />
      </div>
    </div>
  );
};

export default IntroHeroImage;
