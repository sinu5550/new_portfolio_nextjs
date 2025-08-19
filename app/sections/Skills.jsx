"use client";
import React, { useEffect } from "react";
import SectionTitile from "../shared/SectionTitile";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import django from "@/public/images/skills/django.png";
import java from "@/public/images/skills/java.png";
import python from "@/public/images/skills/python.png";
import javascript from "@/public/images/skills/javascript.png";
import c from "@/public/images/skills/c.png";
import c_plus_plus from "@/public/images/skills/c++.png";
import react from "@/public/images/skills/react.png";
import express from "@/public/images/skills/express.png";
import git from "@/public/images/skills/git.png";
import firebase from "@/public/images/skills/firebase.png";
import mongodb from "@/public/images/skills/mongodb.png";
import typescript from "@/public/images/skills/typescript.png";
import vscode from "@/public/images/skills/vscode.png";
import Image from "next/image";

import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);
  const skills = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: c_plus_plus,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ];

  const tools = [
    {
      name: "VS Code",
      icon: vscode,
    },
    {
      name: "Git",
      icon: git,
    },
  ];

  return (
    <div id="skills" className="px-6 md:px-10 lg:px-12 my-24 relative">
      <div className="absolute top-20 bg-primary/50 w-11/12 h-[100px] blur-[120px]" />
      <div data-aos="fade-up" className="relative">
        <SectionTitile title={"skills"} />

        <TabGroup>
          <TabList className="w-fit mx-auto flex space-x-0.5 border border-gray-800 rounded-full p-1 mb-8">
            {["Skills", "Tools"].map((tab, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  `px-4 py-1.5 rounded-full transition duration-500  hover:bg-blue-500 hover:opacity-100 hover:text-white ${
                    selected
                      ? "bg-gradient-to-r from-blue-500 focus:outline-none to-transparent text-white"
                      : "text-white"
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel
              className={
                "grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-5"
              }
            >
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="border-[2px] border-gray-600 border-dashed hover:border-primary bg-blue-400/5 backdrop-blur-m
                  d transition duration-300 text-white rounded-lg p-4 flex flex-col md:w-[120px] items-center gap-4 group"
                >
                  <Image
                    src={s.icon}
                    alt={s.name}
                    width={45}
                    className="group-hover:scale-110"
                  />
                  <h5 className="text-md">{s.name}</h5>
                </div>
              ))}
            </TabPanel>
            <TabPanel className={"flex flex-wrap gap-5"}>
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="border-[2px] border-gray-600 border-dashed hover:border-primary bg-blue-400/5 backdrop-blur-m
                  d transition duration-300 text-white rounded-lg p-4 flex flex-col items-center gap-4 w-28 group"
                >
                  <Image
                    src={t.icon}
                    alt={t.name}
                    width={45}
                    className="group-hover:scale-110"
                  />
                  <h5 className="text-md">{t.name}</h5>
                </div>
              ))}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Skills;
