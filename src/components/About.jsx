import React from "react";
import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function About() {
  return (
    
      <div className="text-center max-w-4xl mx-auto space-y-10" id="about">
        <h2 className="text-4xl font-bold text-green-400">About Me</h2>

        <p className="text-lg leading-relaxed">
          I'm <span className="text-green-300 font-semibold">Tanvi Sudhakar Sandbhor</span>, a passionate{" "}
          <span className="text-green-300">Full-Stack Developer</span> who enjoys blending design with function.
          I love turning ideas into beautiful, responsive web experiences using the MERN stack and modern UI practices.
        </p>

        <p className="text-lg">
          I aim to build intuitive digital solutions that create impact and solve real-world problems. 
          I'm also enthusiastic about data structures, and writing clean, maintainable code.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-green-300 mt-10 text-lg font-medium">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Redux</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>OOP</span>
          <span>C++</span>
         
        </div>

        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
          <a
            href="https://leetcode.com/your_leetcode_username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-400 px-4 py-2 rounded-full hover:bg-green-500/10 transition-all"
          >
            <SiLeetcode className="text-yellow-400 text-xl" />
            LeetCode Profile
          </a>

          <a
            href="https://github.com/tanvisandbhor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-400 px-4 py-2 rounded-full hover:bg-green-500/10 transition-all"
          >
            <FaGithub className="text-xl" />
            GitHub Profile
          </a>
        </div> */}
      </div>
    
  );
}
