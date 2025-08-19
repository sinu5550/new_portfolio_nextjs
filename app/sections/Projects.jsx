"use client";
import React, { useEffect } from "react";
import SectionTitile from "../shared/SectionTitile";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with shopping cart, user authentication, and payment integration.",
      image:
        "https://icecreamapps.com/storage/uploads/icecream-capture-website-2(1).png",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveDemo: "https://example.com",
      github: "https://github.com/username/project",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image:
        "https://i.pinimg.com/736x/5c/b8/62/5cb862a89e669427e74dd1d2034c18ef.jpg",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveDemo: "https://example2.com",
      github: "https://github.com/username/project2",
    },
    {
      id: 3,
      title: "College Website",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6m2byHUCGelcITqy44xQuawucjg88_myqv0nwO0bKkV1Oxfc9MaRaxLwvwABfHlTZH0&usqp=CAU",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveDemo: "https://example2.com",
      github: "https://github.com/username/project2",
    },
  ];

  return (
    <div
      id="projects"
      className="px-6 md:px-10 lg:px-12 my-24 lg:mt-32 relative"
    >
      <div className="absolute -top-8 md:top-20 bg-primary/20 md:bg-primary/50 w-11/12 h-full md:h-[200px]  blur-[150px] animate-pulse" />
      <div className="relative">
        <SectionTitile title={"projects"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          {projects.map((project) => (
            <div
              data-aos="fade-right"
              key={project.id}
              className="rounded-lg overflow-hidden bg-transparent border border-gray-700  hover:border-primary  duration-1000 text-white flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={`${project.title}`}
                className="w-full h-52 object-cover"
              />

              {/* Content Container */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 ">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4  ">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-800 font-[500] rounded-full hover:bg-slate-600 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Container */}
                <div className="flex gap-4">
                  {/* Live Demo Button */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary to-transparent text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Live Demo
                  </a>

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
