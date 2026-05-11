"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Server,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Globe size={40} />,
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={40} />,
    tech: ["Node.js", "Express.js", "JWT Auth", "REST APIs"],
  },
  {
    title: "Database",
    icon: <Database size={40} />,
    tech: ["MongoDB", "Mongoose", "Firebase", "MySQL"],
  },
  {
    title: "Tools",
    icon: <Code2 size={40} />,
    tech: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section
            id="skills" className="py-24 px-6 max-w-7xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        My <span className="text-purple-500">Skills</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-purple-500 transition"
          >
            <div className="text-purple-500 mb-5">
              {skill.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}