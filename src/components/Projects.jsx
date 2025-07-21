// src/components/Projects.jsx
import React from "react";

const projects = [
  
  {
    title: "GoFood",
    description: "Food ordering app with secure payment & cart features.",
    link: "https://github.com/tanvisandbhor/foodyupp",
    tech: ["React", "Node.js", "Razorpay"],
  },
  {
    title: "Quizee",
    description: "A real-time quiz web app with timer, results, and leaderboard.",
    link: "https://github.com/tanvisandbhor/Quiziee",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "StudyNotion",
    description: "An EdTech MERN app with JWT, Razorpay, and Tailwind.",
    link: "https://your-studynotion-link.com",
    tech: ["React", "MongoDB", "Express"],
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-400">My Projects</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg hover:shadow-green-400/20 transition-all"
          >
            <h3 className="text-2xl text-green-300 font-semibold mb-2">{project.title}</h3>
            <p className="mb-3">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-green-500/10 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-green-400 underline hover:text-green-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
