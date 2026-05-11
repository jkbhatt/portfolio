"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
            id="about" className="py-24 px-6 max-w-6xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        About <span className="text-purple-500">Me</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg"
      >

        <p className="text-lg md:text-xl leading-9 text-gray-300">
          I'm a passionate Full Stack MERN Developer who enjoys building
          scalable, modern, and responsive web applications.
          I love solving problems, creating clean UI designs,
          and developing real-world projects using modern technologies
          like React, Next.js, Node.js, and MongoDB.
        </p>

      </motion.div>

    </section>
  );
}