"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Hi, I'm <span className="text-purple-500">Jay</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
      >
        <TypeAnimation
          sequence={[
            "Full Stack MERN Developer",
            2000,
            "Next.js Developer",
            2000,
            "React Developer",
            2000,
            "Backend Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl font-semibold">
          View Projects
        </button>

        <a
            href="/resume.pdf"
            download
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
            Download Resume
        </a>
      </motion.div>

      <div className="flex gap-6 mt-10 text-gray-300">
        <a
          href="https://github.com/jkbhatt"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jay-bhatt-41b21129a/"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://leetcode.com/"
          target="_blank"
          className="hover:text-purple-400 transition"
        >
          LeetCode
        </a>
      </div>
    </section>
  );
}