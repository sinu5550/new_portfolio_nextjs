"use client";
import React, { useEffect } from "react";
import SectionTitile from "../shared/SectionTitile";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Led development of cloud-based applications and mentored junior developers.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
    },
    {
      company: "Digital Innovations",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed and maintained multiple web applications using modern technologies.",
      skills: ["React", "Python", "Docker"],
    },
    {
      company: "StartUp Labs",
      position: "Junior Developer",
      duration: "2018 - 2020",
      location: "Boston, MA",
      description:
        "Contributed to the development of user-facing features and internal tools.",
      skills: ["JavaScript", "HTML", "CSS", "Git"],
    },
  ];
  return (
    <div id="exp" className="px-6 md:px-10 lg:px-12">
      <div data-aos="fade-up">
        <SectionTitile title={"experience"} />
        <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-blue-400/5 backdrop-blur-2xl rounded-lg shadow-md p-6 hover:shadow-md hover:shadow-primary transition-shadow duration-300 border border-gray-600 ${
                index % 2 === 0 && "lg:translate-y-10"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.position}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <FaBuilding className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{exp.duration}</span>
                    <span className="mx-2">•</span>
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="mt-4 text-gray-400">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
