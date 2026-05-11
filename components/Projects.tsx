"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "LeetCode Clone",

    description:
      "Full-stack coding platform with authentication, coding problems, leaderboard system, and responsive dashboard UI.",

    image: "/projects/leetcode.png",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],

    github: "https://github.com/jkbhatt",
    live: "https://leetcode-clone-black.vercel.app/",
  },

  {
    title: "ProjectFlow",

    description:
      "Modern task management application with dashboard system, protected routes, and API integration.",

    image: "/projects/projectflow.png",

    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "JWT Auth",
    ],

    github: "https://github.com/jkbhatt",
    live: "#",
  },

  {
    title: "Portfolio Website",

    description:
      "Animated developer portfolio with glassmorphism UI and smooth interactions.",

    image: "/projects/portfolio.png",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/jkbhatt",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Featured <span className="text-purple-500">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-lg hover:border-purple-500 transition duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition"
                >
                  <ExternalLink size={18} />
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}