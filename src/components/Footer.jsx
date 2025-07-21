// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <p className="text-center text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Tanvi Sudhakar Sandbhor. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/tanvisandbhor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tanvi-sandbhor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/txnvviiii_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:tanvisandbhor17@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
