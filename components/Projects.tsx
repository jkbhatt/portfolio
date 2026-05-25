"use client";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "LeetCode Clone",
    description:
      "Full-stack coding platform with authentication, coding problems, leaderboard system, and responsive dashboard UI.",
    image: "/leetcode-preview.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/jkbhatt/leetcode-clone",
    live: "https://leetcode-clone-black.vercel.app/",
  },
  {
    title: "ProjectFlow",
    description:
      "Modern task management application with dashboard system, protected routes, and API integration.",
    image: "/projectflow-preview.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "JWT Auth"],
    github: "https://github.com/jkbhatt/projectflow",
    live: "https://projectflow-pi-opal.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "Animated developer portfolio with glassmorphism UI and smooth interactions.",
    image: "/portfolio-preview.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/jkbhatt/portfolio",
    live: "https://portfolio-one-livid-55.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve built
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-700">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback if image not found
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-purple-400 text-4xl font-bold">${project.title[0]}</div>`;
                    }
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/50 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
