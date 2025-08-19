"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import { Link } from "react-scroll";

// React icons
import { RiMenu3Line } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // If scrolling down
      if (currentScrollPos > prevScrollPos) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navLinks = [
    {
      name: "Home",
      path: "home",
    },
    {
      name: "About Me",
      path: "about",
    },
    {
      name: "Experience",
      path: "exp",
    },
    {
      name: "Skills",
      path: "skills",
    },
    {
      name: "Projects",
      path: "projects",
    },
  ];

  return (
    <div>
      <div
        className={`fixed top-0 z-50 w-full flex items-center justify-between border-b border-gray-700 text-white px-6 md:px-10 lg:px-16 py-1 md:py-3 transition-transform backdrop-blur-3xl ${
          scrollingDown ? "fixed -translate-y-full" : "translate-y-0"
        }`}
      >
        <div>
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        {/* Nav */}
        <div>
          <nav className="md:flex gap-10 hidden text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                offset={-85}
                smooth={true}
                duration={400}
                className="before:w-0 hover:before:w-full before:bg-secondary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-secondary transition-all duration-300 before:left-0 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl cursor-pointer"
          >
            {menuOpen ? <RiMenu4Fill /> : <RiMenu3Line />}
          </div>
        </div>
      </div>
      <aside
        className={`${
          menuOpen ? "translate-x-0" : " translate-x-[1000px]"
        } md:hidden fixed flex flex-col gap-3 text-center bg-white/20 backdrop-blur-lg text-black p-6 w-full md:w-[300px] top-[59px] md:top-[67px] transition-all duration-300 z-50`}
      >
        {navLinks.map((link) => (
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            key={link.name}
            to={link.path}
            offset={-80}
            smooth={true}
            duration={400}
            className="hover:text-secondary cursor-pointer text-white"
          >
            {link.name}
          </Link>
        ))}
      </aside>
    </div>
  );
};

export default Navbar;
