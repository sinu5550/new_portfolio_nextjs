import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-20 h-12 flex justify-center items-center bg-blue-100">
      <p className="text-xs md:text-md text-slate-900 font-[500]">
        &copy; <span id="currentYear">{currentYear}</span> Intisar Ahmed Siyan.
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
