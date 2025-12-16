"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#33353F] text-white select-none">
      <div className="container mx-auto p-6 flex justify-between items-center">

        {/* Social Icons on Left */}
        <div className="flex items-center gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/eldhosegeorge2004"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            className="text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <FaGithub
              size={28}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              className="group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#00FFFF]"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/eldhosegeorge2004"
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            className="text-gray-300 hover:text-[#0A66C2] transition-all duration-300 group"
          >
            <FaLinkedin
              size={28}
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              className="group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#00A1FF]"
            />
          </a>

        </div>

        <p className="text-slate-600 text-sm select-none">
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
