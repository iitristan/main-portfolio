import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "OSAMS",
    description: "Capstone project for asset management.",
    technologies: ["Google API", "Twilio", "React", "JavaScript", "PostgreSQL", "Tailwind"],
    image: "/osams_img.png",
    alt: "OSAMS Project Image",
    link: "https://github.com/iitristan/",
  },
  {
    title: "Tiger Media Network",
    description: "Project management system with collaboration.",
    technologies: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
    image: "/tmn_img.png",
    alt: "Tiger Media Network Project Image",
    link: "https://github.com/iitristan/",
  },
  {
    title: "GameFly",
    description: "Video game data app with wishlist.",
    technologies: ["IGDB API", "React", "JavaScript", "Tailwind", "MySQL", "Node.js"],
    image: "/gamefly_img.png",
    alt: "GameFly Project Image",
    link: "https://github.com/iitristan/steamgamingblog",
  },
  {
    title: "Alejandrino",
    description: "Educational game on history.",
    technologies: ["Godot", "C#"],
    image: "/alejandrino_img.png",
    alt: "Alejandrino Project Image",
    link: "https://qwertrystan.itch.io/alejandrino",
  },
  {
    title: "Grade Tracker",
    description: "Track grades and academic progress.",
    technologies: ["Kotlin", "Android Studio"],
    image: "/gradetracker_img.png",
    alt: "Grade Tracker Project Image",
    link: "https://github.com/iitristan/GradeTracker",
  },
  {
    title: "PaNDtropiko",
    description: "Queue management for busy places.",
    technologies: ["React", "Node.js"],
    image: "/queue_img.png",
    alt: "Queue Management System Image",
    link: "https://github.com/iitristan/pantropiko-queuing",
  },
  {
    title: "Text Editor",
    description: "Web-based editor with editing features.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/text-editor_img.png",
    alt: "Text Editor Project Image",
    link: "https://iitristan.github.io/texteditor/",
  },
  {
    title: "Snake Game",
    description: "Classic snake game in JavaScript.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/snake-game_img.png",
    alt: "Snake Game Project Image",
    link: "https://iitristan.github.io/snakegame/",
  },
];

export default function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#1E1E1E] p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }} // Trigger as soon as any part of the element enters the viewport
          transition={{
            delay: index * 0.15, // Staggered animation for cards
            duration: 0.5, // Smooth transition
            ease: "easeOut", // Smooth easing effect
          }}
          whileHover={{
            scale: 1.05, // Slightly enlarges the card on hover
            transition: { duration: 0.3 },
          }}
        >
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-[150px] object-cover rounded-md mb-4"
          />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300"
          >
            {project.title}
          </a>
          <p className="text-gray-400 text-sm mb-2">{project.description}</p>

          {/* Technologies */}
          <div className="flex justify-center flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, i) => (
              <p
                key={i}
                className="bg-[#333] text-gray-300 px-2 py-1 rounded-md text-xs cursor-default"
              >
                {tech}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
