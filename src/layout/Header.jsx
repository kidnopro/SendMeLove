import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            hoanganh_dev
          </motion.div>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium">
          <a
            href=""
            className="hover:text-gray-300 transition duration-300 relative group"
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a
            href="https://www.facebook.com/thichfixbug"
            className="hover:text-gray-300 transition duration-300 relative group"
          >
            Facebook
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
            className="text-gray-200 hover:text-white focus:outline-none relative group"
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
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white font-medium shadow-xl rounded-lg"
        >
          <a
            href=""
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300 transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="https://www.facebook.com/thichfixbug"
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300 transform hover:scale-105"
          >
            Facebook
          </a>
          <a
            href="#"
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300 transform hover:scale-105"
          >
            Instagram
          </a>
          <a
            href="#"
            className="block px-6 py-4 hover:bg-indigo-800 transition duration-300 transform hover:scale-105"
          ></a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
