"use client";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<{ status: number }>;
    };
  }
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailjsReady, setEmailjsReady] = useState(false);

  useEffect(() => {
    // Load EmailJS script
    if (!document.getElementById("emailjs-script")) {
      const script = document.createElement("script");
      script.id = "emailjs-script";
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.onload = () => {
        // Initialize EmailJS with your public key
        // STEP: Replace with your actual EmailJS public key after signing up at emailjs.com
        window.emailjs.init("6DOLvKUz5PiEnOo1y");
        setEmailjsReady(true);
      };
      document.head.appendChild(script);
    } else {
      setEmailjsReady(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    setStatus("sending");

    try {
      if (emailjsReady && window.emailjs) {
        // STEP: Replace these with your actual EmailJS Service ID and Template ID
        await window.emailjs.send(
          "service_70gv8jo",
          "template_tj2zgbd",
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: "jkbhatt2005@gmail.com",
          }
        );
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("EmailJS not loaded");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together!
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Talk</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-5">
              {/* Email */}
              <a
                href="mailto:jkbhatt2005@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-purple-900/50 border border-purple-700/50 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    jkbhatt2005@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919998459252"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-purple-900/50 border border-purple-700/50 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    +91 99984 59252
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jaybhattdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-purple-900/50 border border-purple-700/50 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    linkedin.com/in/jaybhattdev
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/jkbhatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-purple-900/50 border border-purple-700/50 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300 flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                    github.com/jkbhatt
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jay Bhatt"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 focus:border-purple-500 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 focus:border-purple-500 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 focus:border-purple-500 text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 bg-green-900/20 border border-green-700/30 rounded-lg px-4 py-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-700/30 rounded-lg px-4 py-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm">Failed to send. Please email me directly at jkbhatt2005@gmail.com</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
