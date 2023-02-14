import React from "react";

const EmailInput = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="px-4 py-3 rounded-full w-full outline-none border drop-shadow"
        placeholder="example@email.com"
      />
      <button className="px-4 py-2 rounded-full bg-orange-600 text-white font-medium absolute right-3 top-1">
        Subscribe
      </button>
    </div>
  );
};

export default EmailInput;
