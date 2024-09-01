import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            KidNoPro
          </motion.div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Contact
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-indigo-600 text-white font-medium"
        >
          <a href="#" className="block px-4 py-2 hover:bg-indigo-700">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-indigo-700">
            About
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-indigo-700">
            Services
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-indigo-700">
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
