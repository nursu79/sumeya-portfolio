import React, { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    skills: [
      { name: "React", level: 85, experience: "2 years" },
      { name: "Next.js", level: 85, experience: "1.5 years" },
      { name: "TypeScript", level: 80, experience: "1 year" },
      { name: "JavaScript", level: 95, experience: "2.5 years" },
      { name: "Tailwind CSS", level: 88, experience: "2 years" },
      { name: "Framer Motion", level: 75, experience: "1 year" },
      { name: "HTML5", level: 95, experience: "2.5 years" },
      { name: "CSS3", level: 90, experience: "2.5 years" },
      { name: "UI/UX Design", level: 65, experience: "1 year" },
    ],
  },
  {
    label: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 80, experience: "2 years" },
      { name: "Express", level: 75, experience: "1.5 years" },
      { name: "REST APIs", level: 85, experience: "2 years" },
      { name: "MongoDB", level: 70, experience: "1 year" },
      { name: "PostgreSQL", level: 65, experience: "8 months" },
      { name: "Prisma", level: 60, experience: "6 months" },
      { name: "Authentication", level: 75, experience: "1 year" },
    ],
  },
  {
    label: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
    skills: [
      { name: "Git", level: 85, experience: "2.5 years" },
      { name: "CI/CD", level: 60, experience: "1 year" },
      { name: "Jest", level: 70, experience: "1 year" },
      { name: "React Testing Library", level: 65, experience: "8 months" },
      { name: "Agile", level: 80, experience: "2 years" },
      { name: "Vercel", level: 90, experience: "1.5 years" },
      { name: "Netlify", level: 75, experience: "1 year" },
      { name: "Figma", level: 70, experience: "1 year" },
    ],
  },
  {
    label: "Soft Skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 14.5V22h2v-6h2.5l2.54-7.63A1.5 1.5 0 0 1 9.46 8H12c.8 0 1.54.37 2.01.99L16 11l1.99-2.01A2.5 2.5 0 0 1 20 8h2.54c.8 0 1.54.37 2.01.99L27 14.5V22h-7z" />
      </svg>
    ),
    skills: [
      { name: "Communication", level: 90, experience: "Always improving" },
      { name: "Collaboration", level: 85, experience: "Team player" },
      { name: "Problem Solving", level: 88, experience: "Analytical thinker" },
      { name: "Creativity", level: 80, experience: "Innovative approach" },
      { name: "Adaptability", level: 92, experience: "Quick learner" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getLevelColor = (level: number) => {
    if (level >= 80) return "#4ade80"; // Green
    if (level >= 60) return "#fbbf24"; // Yellow
    return "#f87171"; // Red
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-8 px-4"
    >
      <div
        className="main-glass max-w-4xl w-full mx-auto px-4 py-6"
        style={{ borderRadius: 24 }}
      >
        <motion.h2
          className="text-2xl font-bold mb-6 neon-gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {skillGroups.map((group, idx) => (
            <motion.button
              key={group.label}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-sm focus:outline-none ${
                activeTab === idx
                  ? "bg-[#ff9900] text-black shadow-[0_0_20px_4px_rgba(255,153,0,0.3)] scale-105"
                  : "bg-[#232946]/60 text-gray-300 border border-[#393e5c] hover:border-[#ff9900] hover:bg-[#232946]/80"
              }`}
              whileHover={{ scale: activeTab === idx ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <span
                className={activeTab === idx ? "text-black" : "text-[#ff9900]"}
              >
                {group.icon}
              </span>
              {group.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab} // Re-trigger animation when tab changes
        >
          {skillGroups[activeTab].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-[#232946]/50 border border-[#393e5c] rounded-xl p-4 hover:border-[#ff9900]/50 transition-all duration-300 group cursor-pointer"
              variants={skillVariants}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-semibold text-white group-hover:text-[#ff9900] transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-1">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: `${getLevelColor(skill.level)}20`,
                      color: getLevelColor(skill.level),
                    }}
                  >
                    {getLevelText(skill.level)}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#181e2a] rounded-full h-2 mb-2 overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: getLevelColor(skill.level) }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <div
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                      animation: "shimmer 2s infinite",
                    }}
                  />
                </motion.div>
              </div>

              {/* Experience Info */}
              <motion.div
                className="text-xs text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-[#ff9900] font-medium">Experience:</span>{" "}
                {skill.experience}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            {
              label: "Total Skills",
              value: skillGroups.reduce(
                (acc, group) => acc + group.skills.length,
                0
              ),
            },
            {
              label: "Expert Level",
              value: skillGroups
                .flatMap((g) => g.skills)
                .filter((s) => s.level >= 90).length,
            },
            {
              label: "Advanced",
              value: skillGroups
                .flatMap((g) => g.skills)
                .filter((s) => s.level >= 80 && s.level < 90).length,
            },
            { label: "Categories", value: skillGroups.length },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#ff9900] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
