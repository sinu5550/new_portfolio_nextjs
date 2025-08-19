"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { LuChevronsUp } from "react-icons/lu";

const ScrollToUp = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      to="home"
      className={`fixed right-8 bottom-8 hidden md:block  p-3 rounded-full bg-gradient-to-b from-primary/70 to-transparent hover:-translate-y-2 cursor-pointer z-50 transition transform duration-300 ${
        scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      smooth={true}
      duration={400}
    >
      <LuChevronsUp className="text-[40px] opacity-40" />
    </Link>
  );
};

export default ScrollToUp;
