"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">

        <h1 className="text-2xl font-bold text-purple-500">
          Jay
        </h1>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-sm md:text-base">

          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>

          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>

          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 bg-black/90 backdrop-blur-lg text-lg">

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>
      )}

    </nav>
  );
}