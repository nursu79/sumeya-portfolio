import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    url: "https://github.com/nursu79",
    color: "#333",
    bgColor: "#f5f5f5",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    url: "https://www.linkedin.com/in/sumeya-issa-6ba350339",
    color: "#0077b5",
    bgColor: "#e3f2fd",
  },
  {
    name: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M9.04 15.477l-.376 5.3c.538 0 .771-.231 1.049-.507l2.517-2.41 5.217 3.817c.957.528 1.641.252 1.9-.887l3.44-16.106.001-.001c.306-1.423-.515-1.977-1.45-1.632L1.27 9.23C-.116 9.764-.095 10.55 1.033 10.9l5.27 1.643 12.23-7.72c.576-.35 1.1-.156.668.194" />
      </svg>
    ),
    url: "https://t.me/poetic4life",
    color: "#0088cc",
    bgColor: "#e1f5fe",
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    url: "https://www.instagram.com/poetic4_life",
    color: "#e1306c",
    bgColor: "#fce4ec",
  },
  {
    name: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    url: "mailto:sumeyanur7@gmail.com",
    color: "#ea4335",
    bgColor: "#fce8e6",
  },
  {
    name: "Portfolio",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    url: "#projects",
    color: "#ff9900",
    bgColor: "#fff3e0",
  },
];

const SocialCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="social-carousel"
      className="w-full flex flex-col items-center py-6"
    >
      <motion.h2
        className="text-2xl font-bold mb-6 neon-gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect with Me
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("#") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor:
                  hoveredIndex === index ? social.color : social.bgColor,
                boxShadow:
                  hoveredIndex === index
                    ? `0 0 30px ${social.color}40`
                    : "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div
                className="transition-colors duration-300"
                style={{
                  color: hoveredIndex === index ? "#fff" : social.color,
                }}
              >
                {social.icon}
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${social.color}20, transparent)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Label */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-300 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : 10,
              }}
              transition={{ duration: 0.2 }}
            >
              {social.name}
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div
        className="mt-16 flex items-center gap-4 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
        <span className="text-sm font-medium">
          Let's build something amazing together
        </span>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
      </motion.div>
    </section>
  );
};

export default SocialCarousel;
