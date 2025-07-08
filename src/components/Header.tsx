import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav className="bg-[#121212]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6 text-white">
        {/* Name and Titles Section */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-2xl font-semibold">Earl Tristan Isidro</h2>
          <div className="text-wrap">
            <p className="text-gray-400 text-sm">
              Product Designer and Website Developer
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-400 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
