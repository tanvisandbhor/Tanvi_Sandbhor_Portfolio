// src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 text-center">
      <div className="space-y-6 max-w-xl">
        <h1 className="text-4xl font-bold text-green-400">Thank You!</h1>
        <p className="text-lg">
          Your message has been successfully sent. I’ll get back to you as soon as possible!
        </p>
        <Link
          to="/"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
