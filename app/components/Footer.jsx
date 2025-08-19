import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* Left side - Name + Rights */}
        <p className="text-sm md:text-base font-medium text-center md:text-left">
          &copy; {currentYear} <span className="font-bold">Intisar Ahmed Siyan</span>. All rights reserved.
        </p>

        {/* Right side - Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/sinu5550"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/siyan5550"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="mailto:intisarahmedsiyan@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
