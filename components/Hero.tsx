"use client";
import { useEffect, useState } from "react";

const roles = ["Full Stack MERN Developer", "Next.js Developer", "React Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const handleViewProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Google Drive direct download link
    const fileId = "1xoVkhKDmP_MDS9TDAibCBMKaMWiwtWUy";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Jay_Bhatt_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="text-purple-400">Jay Bhatt</span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl mb-8 h-8">
          {displayed}
          <span className="animate-pulse text-purple-400">|</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={handleViewProjects}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={handleDownloadResume}
            className="border border-gray-500 hover:border-purple-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </button>
        </div>

        <div className="flex gap-6 justify-center text-gray-400">
          <a
            href="https://github.com/jkbhatt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300 font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jaybhattdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300 font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
