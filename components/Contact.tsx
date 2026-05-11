"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_4kl3udc",
        "template_tj2zgbd",
        form.current,
        "6DOLvKUz5PiEnOo1y"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error);

        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Contact <span className="text-purple-500">Me</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="bg-black/30 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}