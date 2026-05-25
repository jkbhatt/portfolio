export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-semibold">Jay Bhatt</span>. All rights reserved.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:jkbhatt2005@gmail.com"
            className="hover:text-purple-400 transition-colors"
          >
            jkbhatt2005@gmail.com
          </a>
          <span className="hidden sm:block text-gray-700">|</span>
          <a
            href="tel:+919998459252"
            className="hover:text-purple-400 transition-colors"
          >
            +91 99984 59252
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/jkbhatt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jaybhattdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
