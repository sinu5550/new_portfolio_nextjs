import React from "react";

const SectionTitile = ({ title }) => {
  return (
    <div className="w-fit mx-auto pb-8">
      <h2 className="text-2xl md:text-3xl  capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-white/80 ">
        {title}
      </h2>
      <div className="h-0.5 rounded-full bg-primary"></div>
      <div className="h-0.5 ml-auto w-1/2 rounded-full bg-sky-300 mt-1"></div>
    </div>
  );
};

export default SectionTitile;
