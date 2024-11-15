import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "SCSS", icon: "sass" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "C++", icon: "c" },
  { name: "C#", icon: "cs" },
  { name: "Python", icon: "python" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Node.js", icon: "nodejs" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Express", icon: "express" },
  { name: "ASP.NET", icon: "dotnet" },
  { name: "VS Code", icon: "vscode" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "Postman", icon: "postman" },
  { name: "Linux", icon: "linux" },
  { name: "Figma", icon: "figma" },
  { name: "Prisma", icon: "prisma" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Azure SQL", icon: "azure" },
];

export default function Technologies() {
  return (
    <div className="py-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <motion.h1
          className="text-3xl font-bold mb-6 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Technologies
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1, // Staggered effect
              },
            },
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group w-16 h-16 border border-gray-500 rounded-md flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }} // Scale effect on hover
            >
              {/* Technology Icon */}
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={tech.name}
                className="w-10 h-10 opacity-100 group-hover:opacity-30 transition-opacity duration-300"
              />
              {/* Technology Name Overlay */}
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
