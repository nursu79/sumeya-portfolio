import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Sumeya Ibrahim — Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring glassmorphism design and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sumeya-portfolio-delta.vercel.app/",
    githubUrl: "https://github.com/nursu79/sumeya-portfolio",
  },
  {
    id: 2,
    title: "Wild Oasis – Booking Web App",
    description:
      "A full‑stack booking platform with in‑app guidance, weather info,interactive map, reviews, and Chapa payments to help guests make and complete reservations easily.",
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "FastAPI","Tailwind CSS"],
    liveUrl: "https://wild-oasis-refined.vercel.app/",
    githubUrl: "https://github.com/nursu79/the-wild-oasis",
  },
    {
    id: 3,
    title: "Farmer Hub",
    description:
      "•Built a web platform that connects farmers with buyers so they can list produce, browse offers, and arrange deals in one place.",
    image:
      "https://images.unsplash.com/photo-1526399743290-f73cb4022f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhcm1lciUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://farmerfrontend.vercel.app/",
    githubUrl: "https://github.com/Fenet-Ab/farmer-hub.git",
  },
  {
    id: 4,
    title: "Wander Wallet Flutter",
    description:
      "Cross-platform mobile wallet application built with Flutter and Dart, providing consistent experience across iOS and Android.",
    image:
      "https://images.unsplash.com/photo-1759978200438-38971e248641?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Flutter", "Dart", "Cross-platform", "Mobile UI"],
    liveUrl: "https://github.com/nursu79/Wander_Wallet_Flutter",
    githubUrl: "https://github.com/nursu79/Wander_Wallet_Flutter",
  },
  {
    id: 5,
    title: "CivicFix – Public Issue Tracker",
    description:
      "A web app where citizens can report local issues with location, see them on a map, and use dashboards and charts to track trends over time.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Next.js", "Node.js", "Express", "Supabase", "Leaflet", "Chart.js"],
    liveUrl:
      "/",
    githubUrl:
      "https://github.com/nursu79/civicfix",
  },
  {
    id: 6,
    title: " A FUll-Stack Tour Booking Web App",
    description:
      "A Backend API  for a Tour APP where I applied my knowlege from the course of Jhon Shnedat on Udemy",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["JavaScript", "Node.js", "Express,MongoDB,Auth0"],
    liveUrl:
      "https://github.com/nursu79/fullstack-node-api",
    githubUrl:
      "https://github.com/nursu79/fullstack-node-api",
  },
    {
    id: 7,
    title: "SACCO-Saving-and-Credit-Cooperation-",
    description:
      "A saving Mobile app that helps  users to save, manage and track their money",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Flutter", "Dart", "Cross-platform", "Mobile UI"],
    liveUrl:
      "https://github.com/betsinat-amare/SACCO-Saving-and-Credit-Cooperation-.git",
    githubUrl:
      "https://github.com/betsinat-amare/SACCO-Saving-and-Credit-Cooperation-.git",
  },

    {
    id: 8,
    title: "Digital Marketer Portfolio",
    description:
      "Built a portfolio for a social media manager client , in which their work was shown in a practical way",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&h=600&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl:
      "https://digital-marketer-portfolio-lyart.vercel.app/",
    githubUrl:
      "https://github.com/nursu79/Digital-Marketer-Portfolio",
  }
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
    center: { zIndex: 1, x: 0, opacity: 1 },
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
        className="main-glass max-w-4xl mx-auto px-6 py-4"
        style={{ borderRadius: 24 }}
      >
        <h2 className="text-3xl font-bold mb-8 neon-gradient-text text-center">
          Projects
        </h2>

        <div className="relative flex justify-center mb-8">
          <div
            className="
                relative
                w-full
                max-w-xl
                overflow-hidden
                rounded-2xl
                shadow-2xl
                transform
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-2
                hover:shadow-3xl
                hover:shadow-[#ff9900]/20
                md:h-[343px]
                min-h-[440px]
              "
          >
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
                <div className="h-full bg-gradient-to-br from-[#232946]/80 to-[#1a1d35]/90 backdrop-blur-sm border border-[#ff9900]/20 rounded-2xl overflow-hidden shadow-inner">
                  {/* Desktop */}
                  <div className="hidden md:flex h-full">
                    <motion.div
                      className="relative overflow-hidden w-[55%]"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>

                    <motion.div
                      className="p-5 flex flex-col justify-between h-full w-[45%]"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {currentProject.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                          {currentProject.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {currentProject.tech.slice(0, 2).map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 bg-[#ff9900]/20 text-[#ff9900] rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {currentProject.tech.length > 2 && (
                            <span className="text-xs px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full">
                              +{currentProject.tech.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-row gap-2">
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-black text-xs font-semibold py-2 px-3 rounded-lg text-center hover:from-[#ff9900]/90 hover:to-[#ff6600]/90 transition-all duration-300 shadow-lg hover:shadow-[#ff9900]/25 transform hover:scale-105 hover:-translate-y-0.5"
                        >
                          View Live
                        </a>
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-[#232946] to-[#1a1d35] text-white text-xs font-semibold py-2 px-3 rounded-lg text-center border border-[#ff9900]/30 hover:border-[#ff9900] hover:shadow-[#ff9900]/20 transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-0.5"
                        >
                          GitHub
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile */}
                  <div className="flex flex-col p-5 md:hidden justify-between h-full">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {currentProject.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                        {currentProject.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {currentProject.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-[#ff9900]/20 text-[#ff9900] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-[#ff9900] to-[#ff6600] text-black text-sm font-semibold py-3 px-4 rounded-lg text-center hover:from-[#ff9900]/90 hover:to-[#ff6600]/90 transition-all duration-300 shadow-lg hover:shadow-[#ff9900]/25 transform hover:scale-105 hover:-translate-y-0.5"
                      >
                        View Live
                      </a>
                      <a
                        href={currentProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-[#232946] to-[#1a1d35] text-white text-sm font-semibold py-3 px-4 rounded-lg text-center border border-[#ff9900]/30 hover:border-[#ff9900] hover:shadow-[#ff9900]/20 transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-0.5"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

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
