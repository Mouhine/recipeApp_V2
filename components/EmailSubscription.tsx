import React from "react";
import EmailInput from "./EmailInput";
const EmailSubscription = () => {
  return (
    <div className=" relative bg-Email_bg bg-no-repeat bg-center grid lg:grid-cols-5 place-content-center overflow-hidden bg-cover h-[400px] rounded-xl  my-6 max-w-5xl w-[100%] mx-auto ">
      <div className=" absolute w-full h-full inset-0 bg-black/40"></div>
      <section className="lg:col-span-2 lg:col-start-2 px-6 z-10 ">
        <h1 className="text-white text-5xl font-semibold  ">
          Subscribe to our newsletter
        </h1>
        <p className="text-sm font-mono text-gray-200 py-3">
          Subscribe to our newsletter and get free recipes evry week
        </p>
        <EmailInput />
      </section>
    </div>
  );
};

export default EmailSubscription;
