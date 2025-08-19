"use client";
import React, { useEffect } from "react";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import SharedTabs from "../shared/SharedTabs";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "Full Stack",
      description:
        "Led multiple full-stack projects and mentored junior developers at Tech Corp.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Software Developer",
      description:
        "Specialized in AI and Machine Learning at Stanford University.",
    },
    {
      icon: <FaAward />,
      title: "Tech Excellence",
      description:
        "Awarded for outstanding contributions to open source projects.",
    },
  ];

  return (
    <div
      id="about"
      className="py-10 mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div>
        <div className="grid md:grid-cols-2">
          {/* Left - Content */}
          <div className="p-8 lg:p-12">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-5">
                  About Me
                </h2>
                {/* Tabs */}
                <SharedTabs
                  lable1={"Profile"}
                  lable2={"Passion"}
                  content1={
                    "I am a passionate programmer and web developer, specializing in React and modern JavaScript frameworks. I love writing clean, efficient, and scalable code, always striving to optimize performance and enhance user experience. My approach to development is driven by problem-solving, logical thinking, and continuous learning, allowing me to tackle complex challenges with creativity and precision."
                  }
                  content2={
                    "Programming is more than just writing code for me—it's about problem-solving, innovation, and continuous learning. I am passionate about web development, specializing in React to build dynamic, efficient, and scalable applications. From crafting seamless UI/UX experiences to optimizing performance, I enjoy the challenge of turning ideas into reality through code."
                  }
                />
              </section>
            </div>
          </div>
          {/* Right - Cards */}
          <div className="p-8 lg:p-12 space-y-6 border-t md:border-t-0 md:border-l border-gray-700">
            <div className="sticky top-12">
              <div>
                {experiences.map((exp, index) => (
                  <div
                    data-aos="fade-right"
                    key={index}
                    className="overflow-x-hidden relative flex gap-3 px-4 md:px-10 py-5 border-b border-gray-600 hover:bg-gradient-to-r hover:from-transparent via-primary/50 hover:to-transparent  transition-all  duration-1000 group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <div className="text-xl md:text-2xl p-3 rounded-full bg-primary w-fit h-fit group-hover:bg-white group-hover:text-primary z-10 transition-all duration-300">
                      {exp.icon}
                    </div>
                    <div className="space-y-2 z-10">
                      <h3 className="text-xl md:text-2xl font-bold">
                        {exp.title}
                      </h3>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
