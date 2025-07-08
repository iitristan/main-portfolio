import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Header";
import { Analytics } from "@vercel/analytics/react";
import { Link as ScrollLink } from "react-scroll"; // Importing Link from react-scroll
import {
  FiFolder,
  FiDownload,
  FiMapPin,
  FiServer,
  FiDatabase,
  FiCloud,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMail,
  FiUserCheck,
  FiX,
} from "react-icons/fi"; // Importing icons
import { motion } from "framer-motion";

import ProjectShowcase from "./projects";
import Technologies from "./technologies";
import MediaPortfolio from "./media";
import { useState, useEffect } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true); // Trigger animation on load
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each line
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts off-screen
    visible: {
      opacity: 1,
      y: 0, // Animates to the correct position
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#121212] text-white">
      <Analytics />
      <Layout />
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 lg:p-12 rounded-lg mt-4 lg:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Section */}
        <motion.div
          className="flex flex-col max-w-full lg:max-w-lg space-y-4 mr-0 lg:mr-16 mb-8 lg:mb-0 text-center lg:text-left"
          variants={containerVariants} // Apply stagger effect
        >
          <motion.div variants={lineVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight -mb-2 lg:-mb-4">
              Product Designer &
            </h1>
          </motion.div>
          <motion.div variants={lineVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight -mb-2 lg:-mb-4">
              Website Developer
            </h1>
          </motion.div>
          <motion.div variants={lineVariants}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              driving impact.
            </h1>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg font-normal text-gray-300 mt-4"
            variants={lineVariants} // Animate paragraph after heading lines
          >
            Specializing in user experience design and enterprise web
            development. I create data-driven solutions that enhance user
            engagement and deliver measurable business outcomes.
          </motion.p>

          {/* New Button Section */}
          <motion.div
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-8 lg:mt-12 mb-4"
            variants={lineVariants} // Animate buttons as a group
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="flex items-center space-x-2 px-8 py-1.5 bg-gray-200 text-black text-md font-medium rounded-full hover:bg-gray-300 transition cursor-pointer"
            >
              <FiFolder size={16} />
              <span>Projects</span>
            </ScrollLink>
            <a
              href="/Earl Tristan Isidro - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-1.5 bg-gray-800 text-white text-md font-medium rounded-full hover:bg-gray-700 transition"
            >
              <FiDownload size={16} />
              <span>Resume</span>
            </a>
          </motion.div>

          <motion.ul
            className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm sm:text-md font-medium"
            variants={lineVariants} // Animate links as a group
          >
            <li>
              <a
                href="https://www.linkedin.com/in/tristanisidro/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/iitristan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition duration-200"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/isidro.earltristan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition duration-200"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/iitristan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition duration-200"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="mailto:isidro.earltristan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition duration-200"
              >
                Email
              </a>
            </li>
          </motion.ul>
        </motion.div>
        <div className="relative w-full max-w-xs sm:max-w-sm lg:w-96 h-auto rounded-3xl overflow-hidden mb-0 lg:-mb-40">
          {/* Image Section */}
          <motion.img
            src="/DSC_0010.JPG"
            className="w-full h-full object-cover rounded-3xl"
            alt="tristan image"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Projects Section */}
      <div id="projects" className="bg-[#151515] mt-6 pt-16 pb-10">
        <div className="max-w-screen-lg mx-auto text-center">
          <motion.div
            className="flex flex-col space-y-4 mb-10  mt-16 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }} // Trigger animation when 40% of the section is visible
            variants={containerVariants} // Apply stagger effect
          >
            {/* Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white -mb-2"
              variants={lineVariants} // Each line appears sequentially
            >
              Project Showcase
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-base sm:text-lg -mt-4 px-4"
              variants={lineVariants} // Applies the same animation stagger
            >
              Some projects I’ve worked on, designed, and developed
            </motion.p>
          </motion.div>
          <ProjectShowcase />
        </div>
      </div>

      <div className="bg-[#151515] pb-10">
        <div className="max-w-screen-lg mx-auto flex justify-around text-center text-white">
          {[
            { value: "2", label: "GitHub Followers" },
            { value: "33", label: "GitHub Repositories" },
            { value: "10", label: "Private Repositories" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={statsVariants}
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#121212] py-3">
        <div className="max-w-screen-lg mx-auto text-center">
          <Technologies />
        </div>
      </div>
      <div className="bg-[#151515] py-10">
        <div className="max-w-screen-lg mx-auto text-center text-white">
          <div className="flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-10 px-4">
            <div className="text-center">
              <img
                src="/csa-logo.png"
                className="w-20 h-20 mx-auto mb-2 grayscale"
                alt="Colegio San Agustin Binan Logo"
              />
              <p className="text-xl font-bold">Colegio San Agustin - Biñan</p>
              <p className="text-gray-400 text-sm">SHS, With Highest Honor</p>
            </div>
            <div className="text-center">
              <img
                src="/ust-logo.png"
                className="w-20 h-20 mx-auto mb-2 grayscale"
                alt="University of Santo Tomas Logo"
              />
              <p className="text-xl font-bold">University of Santo Tomas</p>
              <p className="text-gray-400 text-sm">
                Bachelor of Science in Information Technology, Cum Laude
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="bg-[#121212] py-10 text-white">
        {/* About Section */}
        <motion.div
          className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8"
            variants={itemVariants}
          >
            <img
              src="/IMG_2070.JPG"
              alt="Tristan Isidro Professional Photo"
              className="w-48 sm:w-56 lg:w-60 h-auto object-cover rounded-lg mx-auto"
            />
          </motion.div>
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400">
              About
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Professional Background
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Information Technology graduate (Cum Laude) from University of
              Santo Tomas with proven experience in UX design and full-stack
              development. Delivered 200+ conversion-focused digital assets and
              optimized enterprise applications during internship at Home Credit
              Philippines.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Value Proposition
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              I combine technical expertise with user-centered design to deliver
              scalable solutions that drive business results. Ready to
              contribute to product teams as a UX Designer or Full-Stack
              Developer in enterprise environments.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-10 justify-center lg:justify-start">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 px-6 py-2 bg-gray-800 text-white text-md font-medium rounded-full hover:bg-gray-700 transition cursor-pointer"
              >
                <FiFolder />
                <span>Projects</span>
              </ScrollLink>
              <a
                href="https://github.com/iitristan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-2 bg-blue-400 text-white text-md font-medium rounded-full hover:bg-pink-700 transition"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
              <a
                href="/Earl Tristan Isidro - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-2 bg-gray-800 text-white text-md font-medium rounded-full hover:bg-gray-700 transition"
              >
                <FiDownload />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          className="max-w-screen-lg mx-auto mt-8 lg:mt-12 px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-blue-400"
            variants={itemVariants}
          >
            Work Experience
          </motion.h2>

          {/* Work Experience Entries */}
          {[
            {
              title: "User Experience (UX) Intern – Home Credit Philippines",
              period: "February 2025 – June 2025",
              details: [
                "Created 200+ conversion-focused banners (SKU-specific, generic, app downloads), contributing to increased click-through rates (CTR) and app installs",
                "Audited 30+ UI components and optimized 15+ web pages using MS Clarity and Magnolia CMS; improving usability and user engagement based on behavioral insights.",
                "Conducted audits across 30+ components and authored 5 detailed UX reports with actionable recommendations, several of which were approved for implementation",
              ],
              images: [
                "/123123.png",
                "/5214123.png",
                "/5214124.png",
                "/4b5ad32a-badb-4295-9b66-a52fbd8ebcc3.png",
              ],
            },
            {
              title:
                "Full-time Builder (HTF Project Administrative Support Specialist) – HumanDAO",
              period: "August 2022 – April 2025",
              details: [
                "Coordinated onboarding processes for new assistants, including application reviews, role assignments, and orientation across platforms.",
                "Managed daily task distribution for decentralized assistants, ensuring timely updates and follow-ups.",
                "Provided multi-channel support via Discord tickets, email, and DMs; maintained documentation using Trello and Google Sheets.",
                "Promoted HTF programs and HDAO initiatives through targeted social media outreach and Facebook advertising.",
              ],
              images: [
                "/DD_BOT_Ads_20250318_172630_0002.png",
                "/V2.png",
                "/V3.png",
              ],
            },
          ].map((experience, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E1E] p-6 mb-6 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-2">
                <FiUserCheck className="text-blue-400 mr-2 text-xl" />
                <h3 className="text-xl font-semibold">{experience.title}</h3>
              </div>
              <p className="text-gray-400 font-medium">{experience.period}</p>
              <ul className="list-disc ml-5 mt-2 text-gray-400">
                {experience.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              {/* Work samples gallery */}
              {experience.images && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-3">Work Samples:</p>
                  <div
                    className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pb-2"
                    onWheel={(e) => {
                      e.currentTarget.scrollLeft += e.deltaY;
                      e.preventDefault();
                    }}
                  >
                    {experience.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="cursor-pointer flex-shrink-0"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`Work sample ${imgIndex + 1}`}
                          className="h-28 object-contain rounded-lg hover:scale-105 transition-transform duration-200 border border-gray-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="max-w-screen-lg mx-auto mt-8 lg:mt-12 px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-blue-400"
            variants={itemVariants}
          >
            University Extracurricular & Leadership Experience
          </motion.h2>

          {/* Experiences */}
          {[
            {
              title: "President – UST ICS Student Council",
              period: "May 2024 – Present",
              details: [
                "Represents the College in official meetings with the Administration, College, Central Student Council, and external/internal organizations.",
                "Coordinates and engages with the student body and college administration, developing and implementing projects focused on student and career welfare.",
                "Oversees and takes full responsibility for all Student Council activities, ensuring alignment with organizational goals and objectives.",
              ],
            },
            {
              title:
                "AVP for Documentations – UST Student Organizations Coordinating Council",
              period: "September 2023 – May 2024",
              details: [
                "Led the documentation team and initiatives for Paskuhan, one of the university's most celebrated events.",
                "Supervised and guided the Media Documentations Committee.",
                "Developed visual commercials and promotional content for university-wide outreach.",
                "Managed documentation for various high-profile, university-wide events.",
              ],
            },
          ].map((experience, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1E1E] p-6 mb-6 rounded-lg"
              variants={itemVariants}
            >
              <div className="flex items-center mb-2">
                <FiUserCheck className="text-blue-400 mr-2 text-xl" />
                <h3 className="text-xl font-semibold">{experience.title}</h3>
              </div>
              <p className="text-gray-400 font-medium">{experience.period}</p>
              <ul className="list-disc ml-5 mt-2 text-gray-400">
                {experience.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          className="max-w-screen-lg mx-auto mt-12 lg:mt-16 px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 text-blue-400 text-center lg:text-right"
            variants={itemVariants}
          >
            Experienced in
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-center lg:text-left">
            {[
              {
                title: "Frontend Development",
                icon: <FiMapPin />,
                description:
                  "Crafting intuitive, responsive designs that focus on user experience. I create visually appealing interfaces optimized for accessibility.",
              },
              {
                title: "Backend Development",
                icon: <FiServer />,
                description:
                  "Developing robust, secure server-side applications and RESTful APIs to ensure seamless integration and reliable performance.",
              },
              {
                title: "Database Management",
                icon: <FiDatabase />,
                description:
                  "Structuring and maintaining efficient databases, focusing on data integrity, scalability, and performance optimization.",
              },
              {
                title: "UI/UX Design",
                icon: <FiCloud />,
                description:
                  "Crafting user-centric designs that are both visually appealing and highly functional, with a focus on enhancing usability and creating seamless user experiences.",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[#1E1E1E] p-6 rounded-lg"
                variants={itemVariants}
              >
                <div className="flex items-center mb-2">
                  <p className="text-blue-400 mr-2 text-xl">{skill.icon}</p>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <MediaPortfolio />

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-sm sm:max-w-md lg:max-w-lg max-h-[60vh] p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-colors duration-200"
              >
                <FiX size={20} />
              </button>
              <img
                src={selectedImage}
                alt="Work sample - Enlarged"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Contact Section */}
        <motion.div
          id="contact"
          className="max-w-screen-lg mx-auto text-center mt-12 lg:mt-16 px-4 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-2xl font-bold mb-4 text-blue-400"
            variants={itemVariants}
          >
            Contact
          </motion.h2>
          <motion.p
            className="text-sm sm:text-md text-gray-400 mb-6"
            variants={itemVariants}
          >
            Feel free to reach out to me on any of the platforms below:
          </motion.p>
          <motion.ul
            className="flex justify-center gap-6 sm:gap-8 text-md font-medium"
            variants={containerVariants} // Stagger child animations
          >
            <motion.li variants={itemVariants}>
              <a
                href="https://www.linkedin.com/in/tristanisidro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 transition duration-200"
              >
                <FiLinkedin size={24} />
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                href="https://github.com/iitristan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 transition duration-200"
              >
                <FiGithub size={24} />
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                href="https://www.facebook.com/isidro.earltristan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 transition duration-200"
              >
                <FiFacebook size={24} />
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                href="mailto:isidro.earltristan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 transition duration-200"
              >
                <FiMail size={24} />
              </a>
            </motion.li>
          </motion.ul>

          {/* Footer Rights Section */}
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-500">
              © 2024 Tristan Isidro. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
