// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 dark:bg-black/20 text-white shadow-sm py-6 px-6 flex justify-between items-center">
      {/* Brand */}
      <h1 className="text-2xl font-bold tracking-tight">
        <span className="text-green-400">Tanvi Sandbhor</span>
      </h1>

      {/* Links */}
      <div className="flex items-center gap-6 text-sm md:text-base">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">About</Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-green-300">Contact</Link>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="ml-4 hover:text-green-300">
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}
