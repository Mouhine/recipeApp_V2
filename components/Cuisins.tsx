import Link from "next/link";
import React from "react";

const Cuisins = () => {
  const CUISINS = [
    {
      img: "https://cdn.pixabay.com/photo/2016/10/30/17/39/germany-flag-1783774_960_720.png",
      title: "German Cuisin",
      tag: "german",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463_960_720.png",
      title: "India Cuisin",
      tag: "indian",
    },
    {
      img: "https://cdn.pixabay.com/photo/2012/04/26/11/55/flag-42281_960_720.png",
      title: "Mexican Cuisin",
      tag: "mexican",
    },
    {
      img: "https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_960_720.png",
      title: "British Cuisin",
      tag: "british",
    },
    {
      img: "https://cdn.pixabay.com/photo/2012/04/11/15/33/spain-28530_960_720.png",
      title: "Spanish Cuisin",
      tag: "spanish",
    },

    {
      img: "https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834__340.png",
      title: "Vietnam Cuisin",
      tag: "vietnamese",
    },
  ];
  return (
    <div className="max-w-5xl w-[100%] md:w-[90%] mx-auto py-4 my-6  ">
      <h1 className="font-meduim text-xl text-center">Check Our Cuisins</h1>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-6">
        {CUISINS.map((c, i) => {
          return (
            <Link href={`cuisin/${c.tag}`} key={i}>
              <div className="  flex flex-col space-y-3 items-center rounded-lg transition-transform delay-100 hover:scale-110 shadow py-4  ">
                <img src={c.img} alt="" className="w-10 h-10 rounded-full " />
                <p>{c.title}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Cuisins;
