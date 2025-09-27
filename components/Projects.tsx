import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Sumeya Ibrahim — Portfolio (Current)",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring glassmorphism design and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "Currently working on this modern portfolio website featuring glassmorphism design, neon accents, and smooth animations. Built with Next.js and TypeScript for optimal performance and developer experience.",
  },
  {
    id: 2,
    title: "Wander Wallet",
    description:
      "A mobile wallet application built with Kotlin for Android, featuring secure transaction management and user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Kotlin", "Android", "Mobile Development", "UI/UX"],
    liveUrl: "https://github.com/nursu79/Wander-Wallet-",
    githubUrl: "https://github.com/nursu79/Wander-Wallet-",
    longDescription:
      "A comprehensive mobile wallet application developed in Kotlin for Android platform. Features secure transaction handling, intuitive user interface, and modern mobile design patterns for seamless user experience.",
  },
  {
    id: 3,
    title: "Wander Wallet Flutter",
    description:
      "Cross-platform mobile wallet application built with Flutter and Dart, providing consistent experience across iOS and Android.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Flutter", "Dart", "Cross-platform", "Mobile UI"],
    liveUrl: "https://github.com/nursu79/Wander_Wallet_Flutter",
    githubUrl: "https://github.com/nursu79/Wander_Wallet_Flutter",
    longDescription:
      "Cross-platform mobile wallet application built with Flutter framework using Dart. Provides native performance and consistent user experience across both iOS and Android platforms with modern mobile design principles.",
  },
  {
    id: 4,
    title: "Solar System Simulation",
    description:
      "Interactive 3D solar system simulation built with JavaScript, featuring realistic planetary movements and visual effects.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["JavaScript", "3D Graphics", "WebGL", "Animation"],
    liveUrl:
      "https://github.com/Hemennunu/CG-Solar-System-Simulation-2024-2025",
    githubUrl:
      "https://github.com/Hemennunu/CG-Solar-System-Simulation-2024-2025",
    longDescription:
      "An interactive 3D solar system simulation created with JavaScript and WebGL. Features realistic planetary orbits, visual effects, and educational content about our solar system with smooth animations and responsive controls.",
  },
  {
    id: 5,
    title: "Project Management System",
    description:
      "A comprehensive project management system built with TypeScript, featuring task tracking, team collaboration, and progress monitoring.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["TypeScript", "React", "Node.js", "Database"],
    liveUrl:
      "https://github.com/Yitbarek-temp-account/Project-management-system_2024_25",
    githubUrl:
      "https://github.com/Yitbarek-temp-account/Project-management-system_2024_25",
    longDescription:
      "A full-featured project management system developed with TypeScript and modern web technologies. Includes task management, team collaboration tools, progress tracking, and comprehensive project analytics for efficient workflow management.",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const slideTransition = {
    x: { type: "spring" as const, stiffness: 400, damping: 25 },
    opacity: { duration: 0.15 },
  };

  return (
    <section id="projects" className="py-8 px-4">
      <div
        className="main-glass max-w-4xl mx-auto px-4 py-6"
        style={{ borderRadius: 24 }}
      >
        <h2 className="text-2xl font-bold mb-6 neon-gradient-text text-center">
          Projects
        </h2>

        {/* Project Carousel */}
        <div className="relative flex justify-center mb-6">
          {/* Main Project Display */}
          <div className="relative aspect-[4/3] max-h-96 w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-3xl hover:shadow-[#ff9900]/20">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="absolute inset-0"
              >
                <div className="h-full bg-gradient-to-br from-[#232946]/80 to-[#1a1d35]/90 backdrop-blur-sm border border-[#ff9900]/20 rounded-2xl overflow-hidden shadow-inner transform transition-all duration-300 hover:shadow-[#ff9900]/10">
                  <div className="h-full grid grid-cols-1 md:grid-cols-2">
                    {/* Project Image */}
                    <motion.div
                      className="relative overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 }}
                    >
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>

                    {/* Project Content */}
                    <motion.div
                      className="p-5 md:p-6 flex flex-col justify-between h-full"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-[#ff9900] text-[#181e2a] text-xs font-extrabold">
                            ★
                          </span>
                          {currentProject.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                          {currentProject.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {currentProject.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-[#ff9900]/20 text-[#ff9900] rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {currentProject.tech.length > 3 && (
                            <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full">
                              +{currentProject.tech.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-black text-sm font-semibold py-2 px-4 rounded-lg text-center hover:from-[#ff9900]/90 hover:to-[#ff6600]/90 transition-all duration-300 shadow-lg hover:shadow-[#ff9900]/25 transform hover:scale-105 hover:-translate-y-0.5"
                        >
                          View Live
                        </a>
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-[#232946] to-[#1a1d35] text-white text-sm font-semibold py-2 px-4 rounded-lg text-center border border-[#ff9900]/30 hover:border-[#ff9900] hover:shadow-[#ff9900]/20 transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-0.5"
                        >
                          GitHub
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Numbered Project Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-black shadow-lg shadow-[#ff9900]/30 scale-110"
                  : "bg-[#232946]/50 text-gray-400 border border-[#393e5c] hover:bg-[#ff9900]/20 hover:text-white hover:border-[#ff9900]/50 hover:scale-105"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
