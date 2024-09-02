import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            kidnopro_dev
          </motion.div>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium">
          <a
            href="https://www.facebook.com/thichfixbug"
            className="hover:text-gray-300 transition duration-300 relative group"
          >
            Facebook
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="http://linkedin.com/in/kidnopro"
            className="hover:text-gray-300 transition duration-300 relative group"
          >
            Linkedin
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="https://www.instagram.com/kidnopro_dev/"
            className="hover:text-gray-300 transition duration-300 relative group"
          >
            Instagram
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white font-medium shadow-lg rounded-l-lg z-50"
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <a
            href=""
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300"
          >
            Home
          </a>
          <a
            href="https://www.facebook.com/thichfixbug"
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300"
          >
            Facebook
          </a>
          <a
            href="http://linkedin.com/in/kidnopro"
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/kidnopro_dev/"
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300"
          >
            Instagram
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
