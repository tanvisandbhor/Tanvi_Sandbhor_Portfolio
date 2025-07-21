// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-animated text-white dark:text-black transition-all duration-300 px-4"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/bg-dark.jpg')] bg-cover bg-center dark:bg-[url('/bg-light.jpg')] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hey, I’m <span className="text-green-400">Tanvi Sandbhor</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A passionate{" "}
          <span className="bg-green-500/20 px-2 py-1 rounded text-green-300 font-semibold">
            Web Developer
          </span>{" "}
          building beautiful & functional digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="/Tanvi_Sandbhor_Resume.pdf"
            download
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="border border-green-400 hover:bg-green-500 hover:text-white text-green-400 px-6 py-3 rounded-full font-semibold transition-all"
          >
            Explore Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
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
            href="https://instagram.com/@txnvviiii_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto: tanvisandbhor17@gmail.com"
            className="hover:text-green-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
