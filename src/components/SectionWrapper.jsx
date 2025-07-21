// src/components/SectionWrapper.jsx
import React from "react";

export default function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      className="relative min-h-screen bg-animated text-white dark:text-black transition-all duration-300 flex items-center justify-center px-4"
    >
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/bg-dark.jpg')] bg-cover bg-center dark:bg-[url('/bg-light.jpg')] opacity-20" />
      </div>

      {/* Content */}
      <div className="z-10 w-full max-w-6xl">{children}</div>
    </section>
  );
}
