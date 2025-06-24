import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Layout from "../../components/Header";
import { Analytics } from "@vercel/analytics/react";
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiUsers,
  FiTrendingUp,
  FiArrowLeft,
  FiArrowDown,
} from "react-icons/fi";

const InternshipPresentation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const totalSections = 6; // Updated to reflect current number of sections

  // Handle scroll to section
  const scrollToSection = (index: number) => {
    if (isScrolling) return;

    setIsScrolling(true);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        scrollToSection(Math.min(currentSection + 1, totalSections - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSection(Math.max(currentSection - 1, 0));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToSection(Math.min(currentSection + 1, totalSections - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToSection(Math.max(currentSection - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection]);

  // Track current section
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = Array.from({ length: totalSections }, (_, i) =>
        document.getElementById(`section-${i}`)
      ).filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  // Background Elements Component
  const BackgroundElements = ({ sectionId }: { sectionId: number }) => {
    // Different background elements for different sections
    switch (sectionId) {
      case 0: // Title Slide
        return (
          <>
            {/* Large gradient orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-yellow-500/15 to-red-500/15 blur-3xl"
              animate={{
                x: [0, -40, 0],
                y: [0, 30, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Floating shapes */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 10}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
            <USTSeal />
          </>
        );
      case 1: // Introduction
        return (
          <>
            {/* Gradient background */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Floating geometric shapes */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className={`absolute ${
                  i % 3 === 0 ? 'w-6 h-6 rounded-full' : 
                  i % 3 === 1 ? 'w-8 h-2 rounded-full' : 'w-3 h-8 rounded-full'
                } bg-gradient-to-r from-yellow-400/20 to-blue-400/20`}
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 90 + 5}%`,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              />
            ))}
            {/* University themed icons */}
            <motion.div
              className="absolute top-20 right-20 text-4xl opacity-10"
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
            >
              🎓
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-20 text-3xl opacity-10"
              animate={{
                y: [0, -20, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
            >
              📚
            </motion.div>
          </>
        );
      case 2: // Contributions
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient overlay */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/15 via-transparent to-blue-900/15"
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
            />
            {/* Floating work icons */}
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 90 + 5}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                {['🎨', '📊', '💻', '✨', '🔧', '📈', '🚀'][i - 1]}
              </motion.div>
            ))}
            {/* Project work thumbnails floating in background */}
            {[
              { id: 1, image: "123123.png" },
              { id: 2, image: "5214123.png" },
              { id: 3, image: "5214124.png" },
            ].map((project) => (
              <motion.div
                key={project.id}
                className={`absolute w-32 h-32 bg-gray-700/50 rounded-lg backdrop-blur-sm border border-gray-600/30 overflow-hidden`}
                style={{
                  top: `${project.id === 1 ? 15 : project.id === 2 ? 75 : 25}%`,
                  left: `${
                    project.id === 1 ? 10 : project.id === 2 ? 70 : 85
                  }%`,
                  rotate: Math.random() * 20 - 10,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{
                  delay: project.id * 0.2,
                  duration: 0.8,
                }}
              >
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            {/* Floating geometric shapes */}
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={`shape-${i}`}
                className="absolute w-16 h-16 border-2 border-green-400/20 rounded-lg"
                style={{
                  top: `${30 + i * 20}%`,
                  right: `${5 + i * 15}%`,
                  rotate: 45,
                }}
                animate={{
                  rotate: [45, 225, 405],
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  delay: i,
                }}
              />
            ))}
          </div>
        );
      case 3: // Achievements
        return (
          <>
            {/* Purple gradient background */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            />
            {/* Achievement themed floating icons */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="absolute text-3xl opacity-15"
                style={{
                  top: `${Math.random() * 70 + 15}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 15, -15, 0],
                  scale: [0.7, 1.3, 0.7],
                }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              >
                {['🏆', '🎯', '⭐', '💎', '🌟', '🚀'][i - 1]}
              </motion.div>
            ))}
            {/* Floating star particles */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full"
                style={{
                  top: `${Math.random() * 90 + 5}%`,
                  left: `${Math.random() * 95 + 2.5}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </>
        );
      case 4: // Career Aspirations
        return (
          <>
            {/* Simple gradient background */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-900/12 via-transparent to-red-900/12"
              animate={{
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
              }}
            />
            {/* Subtle floating orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-pink-500/15 to-purple-500/15 blur-2xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-red-500/12 to-yellow-500/12 blur-2xl"
              animate={{
                x: [0, -25, 0],
                y: [0, 15, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Simple career themed icons */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="absolute text-3xl opacity-10"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${15 + i * 12}%`,
                }}
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                  duration: 14 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.2,
                }}
              >
                {['💫', '🎨', '💡', '✨', '🚀'][i - 1]}
              </motion.div>
            ))}
            {/* Simple appreciation hearts */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`heart-${i}`}
                className="absolute text-3xl opacity-8"
                style={{
                  top: `${25 + i * 25}%`,
                  right: `${15 + i * 15}%`,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.05, 0.12, 0.05],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  delay: i * 1,
                }}
              >
                {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '💙' : '💜'}
              </motion.div>
            ))}
            {/* Minimal sparkles */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-pink-400/40 rounded-full"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 1.8,
                }}
              />
            ))}
          </>
        );
      case 5: // UST Tradition
        return (
          <>
            {/* Simple golden gradient background */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/15 via-transparent to-amber-900/10"
              animate={{
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
              }}
            />
            {/* Subtle floating orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-600/20 blur-2xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-amber-500/15 to-yellow-600/15 blur-2xl"
              animate={{
                x: [0, -25, 0],
                y: [0, 15, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Simple UST themed icons */}
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute text-3xl opacity-10"
                style={{
                  top: `${20 + i * 20}%`,
                  left: `${10 + i * 15}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  delay: i * 1,
                }}
              >
                {['✏️', '📝', '🎓', '✨'][i - 1]}
              </motion.div>
            ))}
            {/* Clean signature elements */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`sig-${i}`}
                className="absolute w-24 h-8 bg-white/8 backdrop-blur-sm rounded-full border border-yellow-400/20"
                style={{
                  top: `${25 + i * 15}%`,
                  right: `${15 + i * 10}%`,
                  rotate: Math.random() * 10 - 5,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 0.4,
                  y: [0, -10, 0],
                }}
                transition={{
                  delay: i * 0.3,
                  duration: 1,
                  y: {
                    duration: 8 + i,
                    repeat: Infinity,
                    delay: i * 2,
                  }
                }}
              />
            ))}
            {/* Simple Figma elements */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={`figma-${i}`}
                className="absolute w-6 h-6 rounded-full border-2 border-yellow-400/25"
                style={{
                  top: `${40 + i * 15}%`,
                  left: `${70 + i * 8}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  delay: i * 1,
                }}
              />
            ))}
            {/* Minimal sparkles */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
              />
            ))}
          </>
        );
      default:
        return (
          <>
            <motion.div
              className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-2xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-500/15 to-red-500/15 blur-2xl"
              animate={{
                x: [0, -30, 0],
                y: [0, 20, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Generic floating particles */}
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 90 + 5}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                }}
              />
            ))}
          </>
        );
    }
  };

  // UST Seal component
  const USTSeal = () => (
    <motion.div
      className="absolute -bottom-20 -right-20 w-64 h-64 opacity-10"
      initial={{ rotate: 0, scale: 0.5 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#FFD700"
          strokeWidth="1"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FFD700"
          fontFamily="serif"
          fontSize="8"
          fontWeight="bold"
        >
          UNIVERSIDAD • DE • SANTO • TOMAS
        </text>
      </svg>
    </motion.div>
  );

  // Navigation controls
  const NavigationControls = () => (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-8">
      <button
        onClick={() => scrollToSection(Math.max(currentSection - 1, 0))}
        className="p-3 rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:bg-gray-700 transition"
      >
        <FiArrowLeft className="text-white" />
      </button>
      <button
        onClick={() =>
          scrollToSection(Math.min(currentSection + 1, totalSections - 1))
        }
        className="p-3 rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:bg-gray-700 transition"
      >
        <FiArrowRight className="text-white" />
      </button>
    </div>
  );

  // Navigation dots
  const NavigationDots = () => (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, i) => (
        <button
          key={i}
          onClick={() => scrollToSection(i)}
          className="relative group"
        >
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentSection
                ? "bg-white scale-150"
                : "bg-gray-500 hover:bg-gray-300"
            }`}
          />
          <div
            className={`absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              i === currentSection ? "opacity-100" : ""
            }`}
          >
            {i === 0
              ? "Intro"
              : i === 1
              ? "Work"
              : i === 2
              ? "Contributions"
              : i === 3
              ? "Achievements"
              : i === 4
              ? "Aspirations"
              : "UST Tradition"}
          </div>
        </button>
      ))}
    </div>
  );

  // Slide component with horizontal/vertical animations
  const Slide = ({
    children,
    id,
    bg = "bg-gray-900",
    direction = "vertical",
  }: {
    children: React.ReactNode;
    id: number;
    bg?: string;
    direction?: "vertical" | "horizontal";
  }) => (
    <section
      id={`section-${id}`}
      className={`h-screen w-full snap-start snap-always flex items-center justify-center relative overflow-hidden ${bg}`}
    >
      <BackgroundElements sectionId={id} />
      <div
        className={`relative z-10 max-w-6xl mx-auto px-8 w-full ${
          direction === "horizontal"
            ? "flex items-center gap-16 overflow-x-auto"
            : ""
        }`}
      >
        {children}
      </div>
    </section>
  );

  // Animated text component with multiple reveal options
  const AnimatedText = ({
    text,
    delay = 0,
    size = "text-5xl",
    weight = "font-semibold",
    color = "text-white",
    revealType = "slideUp", // slideUp, slideLeft, slideRight, fade, scale
    stagger = 0.03,
    once = true,
  }: {
    text: string;
    delay?: number;
    size?: string;
    weight?: string;
    color?: string;
    revealType?: string;
    stagger?: number;
    once?: boolean;
  }) => {
    const getInitial = () => {
      switch (revealType) {
        case "slideLeft":
          return { x: -100, opacity: 0 };
        case "slideRight":
          return { x: 100, opacity: 0 };
        case "fade":
          return { opacity: 0 };
        case "scale":
          return { scale: 0.8, opacity: 0 };
        default:
          return { y: 50, opacity: 0 }; // slideUp
      }
    };

    const getWhileInView = () => {
      switch (revealType) {
        case "slideLeft":
        case "slideRight":
        case "slideUp":
          return { x: 0, y: 0, opacity: 1 };
        case "fade":
          return { opacity: 1 };
        case "scale":
          return { scale: 1, opacity: 1 };
        default:
          return { y: 0, opacity: 1 };
      }
    };

    return (
      <div className="overflow-hidden">
        {text.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className="inline-block overflow-hidden mr-2">
            <motion.span
              className={`inline-block ${size} ${weight} ${color}`}
              initial={getInitial()}
              whileInView={getWhileInView()}
              transition={{
                duration: 0.8,
                delay: delay + wordIndex * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once, margin: "-50px" }}
            >
              {word + (wordIndex < text.split(" ").length - 1 ? " " : "")}
            </motion.span>
          </div>
        ))}
      </div>
    );
  };

  // Apple-style animated bullet points
  const BulletPoint = ({
    children,
    delay = 0,
    icon = <FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />,
  }: {
    children: React.ReactNode;
    delay?: number;
    icon?: React.ReactNode;
  }) => (
    <motion.li
      className="flex items-start gap-3 text-lg mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {icon}
      <span className="text-gray-300">{children}</span>
    </motion.li>
  );

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Analytics />

      <div
        ref={containerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      >
        <Slide id={0} bg="bg-black">
          <div className="grid md:grid-cols-2 gap-16 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="w-full aspect-square bg-gray-800 rounded-2xl mb-8 flex items-center justify-center text-gray-400 overflow-hidden">
                <img
                  src="mendwho.jfif"
                  alt="MendWho Project"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Home Credit Internship
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
                Learning Experience Sharing
              </h2>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-xl md:text-2xl text-gray-300 mb-4">
                  June 25, 2025
                </div>
                <div className="text-lg text-gray-400">
                  Presented by Earl Tristan Isidro
                </div>
              </motion.div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <div className="flex items-center gap-3 text-gray-300">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiArrowDown className="text-xl" />
                  </motion.div>
                  <span className="text-sm">Scroll to continue</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Slide>
        {/* Section 1: Introduction */}
        <Slide id={1} bg="bg-black">
          <div className="flex flex-col justify-center h-full">
            <div className="mb-8 text-center">
              <AnimatedText
                text="Home Credit Internship Learning Experience Sharing"
                size="text-3xl md:text-5xl"
                weight="font-bold"
                color="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              />
              <AnimatedText
                text="June 25, 2025"
                size="text-xl md:text-2xl"
                weight="font-medium"
                color="text-gray-400"
                delay={0.5}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-full aspect-[2/4] bg-gray-800 rounded-2xl mb-8 flex items-center justify-center text-gray-400 overflow-hidden">
                  <img
                    src="IMG_2070.JPG"
                    alt="Earl"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>

              <div>
                <AnimatedText
                  text="Earl Tristan Isidro"
                  size="text-5xl md:text-6xl"
                  weight="font-bold"
                  color="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                  stagger={0.02}
                />

                <motion.div
                  className="mt-4 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <AnimatedText
                    text="University of Santo Tomas"
                    size="text-xl"
                    color="text-yellow-400"
                    revealType="fade"
                  />
                  <AnimatedText
                    text="Graduating this 28th of June 2025 with a Bachelor of Science in Information Technology"
                    size="text-lg"
                    color="text-gray-400"
                    revealType="fade"
                    delay={0.3}
                  />
                  <AnimatedText
                    text="Cum Laude"
                    size="text-lg"
                    color="text-yellow-300"
                    revealType="fade"
                    delay={0.6}
                  />
                </motion.div>

                <ul>
                  <BulletPoint>From Biñan, Laguna</BulletPoint>
                  <BulletPoint delay={0.1}>
                    UX Intern under Web Team (Ivy)
                  </BulletPoint>
                  <BulletPoint delay={0.2}>
                    500 hours intern, started last February 25
                  </BulletPoint>
                  <BulletPoint delay={0.3}>
                    Student Council President
                  </BulletPoint>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* Section 3: Contributions */}
        <Slide id={2} bg="bg-gray-900">
          <div className="w-full max-w-6xl mx-auto px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                My Contributions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-green-400">
                  <FiTrendingUp className="text-xl" />
                  Key Contributions
                </h3>

                <ul>
                  <BulletPoint>
                    Created 200+ SKU-Specific, Generic and App Downloads Banners
                  </BulletPoint>
                  <BulletPoint delay={0.1}>
                    Audited 30+ components in the different pages
                  </BulletPoint>
                  <BulletPoint delay={0.2}>Optimized 15 articles</BulletPoint>
                  <BulletPoint delay={0.3}>Analyzed 6 Competitors</BulletPoint>
                  <BulletPoint delay={0.4}>
                    Created 5 reports on audits, analysis, and suggestions
                  </BulletPoint>
                  <BulletPoint delay={0.5}>
                    2 Use Case pages created
                  </BulletPoint>
                  <BulletPoint delay={0.6}>And many more...</BulletPoint>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-yellow-400">
                  <FiAward className="text-xl" />
                  Key Achievements
                </h3>

                <ul>
                  <BulletPoint
                    icon={
                      <FiAward className="text-yellow-400 mt-1 flex-shrink-0" />
                    }
                  >
                    Helped increase click-through rate (CTR) and app downloads
                    by producing banners
                  </BulletPoint>
                  <BulletPoint
                    delay={0.1}
                    icon={
                      <FiAward className="text-yellow-400 mt-1 flex-shrink-0" />
                    }
                  >
                    Had some of my audits be implemented or is for
                    implementation
                  </BulletPoint>
                  <BulletPoint
                    delay={0.2}
                    icon={
                      <FiAward className="text-yellow-400 mt-1 flex-shrink-0" />
                    }
                  >
                    Learned how to work within a data-driven, conversion-focused
                    environment
                  </BulletPoint>
                  <BulletPoint
                    delay={0.3}
                    icon={
                      <FiAward className="text-yellow-400 mt-1 flex-shrink-0" />
                    }
                  >
                    Balanced creative freedom with performance metrics
                  </BulletPoint>
                </ul>
              </motion.div>
            </div>
          </div>
        </Slide>

        {/* Section 4: Achievements */}
        <Slide id={3} bg="bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                My Achievements
              </h2>
            </div>

            <motion.div
              className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <ul className="space-y-3">
                <BulletPoint>
                  Deep understanding of Magnolia CMS, Photoshop, and Figma
                </BulletPoint>
                <BulletPoint delay={0.1}>
                  Improved design and workflow efficiency for tasks (from 1-2
                  days when starting to just an afternoon)
                </BulletPoint>
                <BulletPoint delay={0.2}>
                  Developed cleaner designs with better visual hierarchy
                </BulletPoint>
                <BulletPoint delay={0.3}>
                  Learned to work with MS Clarity and enjoyed gathering data and
                  making user assumptions
                </BulletPoint>
                <BulletPoint delay={0.4}>
                  Adopted UX Laws, Heuristics, and Design Standards in Work and
                  Personal Projects
                </BulletPoint>
                <BulletPoint delay={0.5}>Smileys aren't scary :)</BulletPoint>
                <BulletPoint delay={0.6}>
                  Nakakuha ng Samsung Galaxy Tab S10+ gamit Voucher ni Lyka :D
                </BulletPoint>
              </ul>
            </motion.div>
          </div>
        </Slide>

        {/* Section 5: Career Aspirations */}
        <Slide id={4} bg="bg-black">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
                Career Aspirations and Appreciation
              </h2>
            </div>

            <motion.div
              className="text-xl mb-12 leading-relaxed text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="mb-6">
                My time at Home Credit has been nothing short of transformative.
                I’ve grown so much, not just in my understanding of the UX
                process, but in learning how to truly collaborate with a team in
                ways the Academe could never fully teach.
              </p>
              <p className="mb-6">
                I genuinely enjoyed every task I worked on, knowing that it
                contributed to something bigger. I’m deeply grateful for the
                supportive and inspiring environment that made my practicum not
                just a requirement, but an experience I’ll always carry with me.
              </p>
              <p className="mb-6">
                What I enjoyed the most was creating user stories and
                assumptions that translate to solutions, similarly to how
                developers work.
              </p>
              <p>
                Although I have already stated this in my thank you letter
                previously sent, through the guidance, patience, and
                encouragement of my peers and leads, I’ve come to realize that
                UX isn’t just a another option from development for me, which I
                initially planned on entering this internship, but rather it’s
                now what I want to pursue. I’m excited for what the future
                holds, and I sincerely hope our paths cross again someday.
              </p>
            </motion.div>

            <motion.div
              className="text-3xl font-semibold mt-16 text-blue-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Thank You, HC!
            </motion.div>
          </motion.div>
        </Slide>

        {/* Section 6: UST Tradition */}
        <Slide id={5} bg="bg-gray-950">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
                Request for UST Tradition
              </h2>

              {/* UST Shirt Image Placeholder */}
              <motion.div
                className="w-80 h-60 mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl mb-6 border-2 border-yellow-400/30 flex items-center justify-center overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="BaccMass.jpg"
                  alt="UST Baccalaureate Mass Tradition"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              <div className="text-xs text-gray-500 italic mb-6">
                Courtesy of TomasinoWeb
              </div>
            </motion.div>

            <motion.div
              className="text-xl leading-relaxed mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="mb-6">
                In UST, it's a cherished tradition for graduates to have their
                uniforms signed by those who had helped them developed (Friends,
                Professors, etc.) throughout their college years during
                Baccalaureate Mass.
              </p>

              <p>
                While I didn’t bring my uniform today, the team I’ve worked with
                has been such a meaningful part of my growth. If you have a
                moment, I’d love to ask for a signature or a quick message in a
                Figma Jam—just a little something to remember this chapter by!
                😊
              </p>
            </motion.div>

            <motion.div
              className="text-lg text-yellow-300 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              ✧ Some traditions deserve digital preservation ✧
            </motion.div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default InternshipPresentation;
