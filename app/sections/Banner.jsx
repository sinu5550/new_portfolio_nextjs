"use client";
import React from "react";
import profile from "@/public/images/profile.png";
import arrow from "@/public/images/arrow.png";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import { motion } from "motion/react";

// ICons
import { FaDownload, FaLinkedinIn, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Banner = () => {
  const socialLink = [
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
    },
    {
      icon: <FaXTwitter />,
      link: "https://twitter.com",
    },
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },
    {
      icon: <IoLogoGithub />,
      link: "https://github.com",
    },
  ];

  return (
    <div
      id="home"
      className="min-h-screen px-6 md:px-10 lg:px-16 flex items-center pt-20 md:pt-10 relative"
    >
      <div className="absolute left-[50px] -top-0 w-[250px] h-full md:w-[450px] md:h-[450px] rounded-full blur-[270px] bg-secondary/60" />

      {/* Main */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 relative">
        {/* Arrow */}
        <Image
          src={arrow}
          alt="Arrow"
          className="absolute w-16 -top-8 rotate-[200deg] left-1/3 opacity-10 hidden lg:block"
        />
        {/* Content */}

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-3 md:w-1/2"
        >
          <h4 className="text-lg lg:text-xl font-medium">
            Hello, I'm Intisar Ahmed Siyan
          </h4>

          <h1
            className={`text-4xl lg:text-5xl lg:h-[95px] h-[75px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/80 tracking-tight mb-4`}
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "Turning Ideas into Reality with Code",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="text-sm text-gray-300">
            Passionate web developer with expertise in React and modern
            JavaScript. Crafting intuitive and dynamic user experiences, focused
            on building scalable and performance-driven applications.
          </p>
          <div className="flex gap-4 mt-3">
            <button className="bg-gradient-to-r from-secondary px-4 py-2 rounded-md  hover:bg-blue-700 transition duration-300 font-[500] flex items-center gap-2">
              <FaDownload /> Resume
            </button>
            <button className="border border-secondary px-4 py-2 rounded-md hover:shadow-sm hover:shadow-primary duration-300 font-[500] flex items-center gap-2">
              <FaPhoneAlt /> Contact Me
            </button>
          </div>
          <div className="flex w-full flex-col border-opacity-50">
            <div className="divider">Stay Connected</div>
          </div>
          <div className="flex gap-3 justify-center">
            {socialLink.map((s) => (
              <div
                key={s.link}  // Using 'link' as the unique key
                className="border border-secondary rounded-[4px] p-1.5 hover:shadow-sm hover:shadow-secondary cursor-pointer duration-200"
              >
                {s.icon}
              </div>
            ))}
          </div>
        </motion.div>
        {/* Profile picture */}
        <motion.figure
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[150px] rounded-tr-lg rounded-bl-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20   animate-pulse"></div>

          <Image
            src={profile}
            alt="Intisar Ahmed Siyan"
            className="relative rounded-[150px] rounded-tr-lg rounded-bl-2xl border-r-[3px] border-b-[3px] border-primary shadow-lg shadow-primary w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover"
          />
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute -left-[30px] md:-left-[80px] top-0 md:top-10 text-black font-[500] bg-pink-50 rounded-lg text-xs md:text-md lg:text-[16px] px-5 py-2 text-center leading-5"
          >
            <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-pink-600">
              2+
            </span>{" "}
            Years Experience
          </motion.div>
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute -right-3 md:right-[0px] bottom-5 text-black font-[600] bg-sky-50 rounded-lg text-xs lg:text-md lg:text-[16px] px-5 py-2 text-center leading-5"
          >
            <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-primary">
              5+
            </span>{" "}
            Satisfied Clients
          </motion.div>
        </motion.figure>
      </div>
    </div>
  );
};

export default Banner;
