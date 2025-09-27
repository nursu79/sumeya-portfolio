import React, { useState } from "react";
import { motion } from "framer-motion";

const educationData = [
  // Certificates
  {
    id: 1,
    type: "certificate",
    title: "Microsoft Certified: Azure Security Engineer Associate (AZ-500)",
    provider: "Microsoft",
    date: "In Progress",
    status: "in-progress",
    description:
      "Implementing security controls, managing security posture, and securing identities, data, apps, and networks in Azure.",
    skills: [
      "Azure Security",
      "Identity & Access",
      "Platform Protection",
      "Security Operations",
    ],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl:
      "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/",
  },
  {
    id: 2,
    type: "certificate",
    title: "Annotate Plus Certification",
    provider: "Annotate Plus",
    date: "2024",
    status: "completed",
    description:
      "Certification demonstrating proficiency with Annotate Plus tooling and workflow.",
    skills: ["Documentation", "Annotation", "Collaboration"],
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl: "#",
  },

  // Bootcamps
  {
    id: 3,
    type: "bootcamp",
    title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    provider: "Udemy (Jonas Schmedtmann) — Telegram Free Resource",
    date: "2024",
    status: "completed",
    description:
      "Intensive React bootcamp covering modern React, hooks, advanced patterns, Redux, Next.js, testing, and best practices.",
    skills: ["React", "Redux", "Next.js", "Hooks", "Testing"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl: "#",
  },

  // Courses (Udemy / Self-Learning)
  {
    id: 4,
    type: "bootcamp",
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023",
    provider: "Udemy (Jonas Schmedtmann) — Telegram Free Resource",
    date: "2024",
    status: "completed",
    description:
      "Comprehensive backend development with Node.js, Express, MongoDB, Mongoose, security, and performance.",
    skills: ["Node.js", "Express", "MongoDB", "Mongoose", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl: "#",
  },
  // Removed course duplicate; moved to Bootcamp above
  {
    id: 6,
    type: "course",
    title: "The Complete Flutter Development Bootcamp with Dart",
    provider: "Udemy (Dr. Angela Yu)",
    date: "2024",
    status: "in-progress",
    description:
      "Full Flutter and Dart bootcamp covering widgets, state management, navigation, and app deployment.",
    skills: ["Flutter", "Dart", "State Management", "Mobile UI"],
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl: "#",
  },
  {
    id: 7,
    type: "course",
    title: "Data Structures & Algorithms: Zero To Mastery",
    provider: "Zero To Mastery",
    date: "2024",
    status: "completed",
    description:
      "Advanced data structures and algorithms with performance analysis and interview preparation.",
    skills: ["Algorithms", "Data Structures", "Big O", "Problem Solving"],
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl: "#",
  },

  // Current Learning
  {
    id: 8,
    type: "learning",
    title: "Complete Machine Learning & Data Science: Zero To Mastery",
    provider: "Zero To Mastery",
    date: "Currently Learning",
    status: "in-progress",
    description:
      "Hands-on ML and AI: supervised/unsupervised learning, neural networks, NLP, and deployment.",
    skills: ["Machine Learning", "AI", "Python", "Pandas", "Scikit-learn"],
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl: "#",
  },
  {
    id: 9,
    type: "learning",
    title: "Next.js & Modern React Patterns",
    provider: "Self-Learning",
    date: "Currently Learning",
    status: "in-progress",
    description:
      "Exploring server-side rendering, static generation, and modern React development patterns.",
    skills: ["Next.js", "SSR", "SSG", "API Routes", "Performance"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=300&q=80",
    verificationUrl: "#",
  },
];

const EducationTraining = () => {
  const [selectedCategory, setSelectedCategory] = useState("certificate");

  const categories = [
    {
      id: "certificate",
      name: "Certificates",
      count: educationData.filter((item) => item.type === "certificate").length,
    },
    {
      id: "bootcamp",
      name: "Bootcamps",
      count: educationData.filter((item) => item.type === "bootcamp").length,
    },
    {
      id: "course",
      name: "Courses",
      count: educationData.filter((item) => item.type === "course").length,
    },
    {
      id: "learning",
      name: "Current Learning",
      count: educationData.filter((item) => item.type === "learning").length,
    },
  ];

  const filteredData = educationData.filter(
    (item) => item.type === selectedCategory
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "🔄";
      default:
        return "📚";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "in-progress":
        return "text-[#ff9900]";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="education-training" className="py-8 px-4">
      <div
        className="main-glass max-w-4xl mx-auto px-4 py-6"
        style={{ borderRadius: 32 }}
      >
        <h2 className="text-2xl font-bold mb-6 neon-gradient-text text-center">
          Education & Training
        </h2>
        <p className="text-gray-300 text-center mb-8 text-sm max-w-2xl mx-auto">
          My learning journey in web development and technology.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#ff9900] text-[#181e2a] shadow-[0_0_12px_3px_rgba(255,153,0,0.3)]"
                  : "bg-[#232946] text-gray-300 border border-[#393e5c] hover:border-[#ff9900]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>

        {/* Education Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-[#232946]/70 border border-[#393e5c] rounded-xl p-4 shadow-lg backdrop-blur-md hover:border-[#ff9900] hover:shadow-[0_0_16px_3px_rgba(255,153,0,0.2)] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">
                      {getStatusIcon(item.status)}
                    </span>
                    <span
                      className={`text-xs font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status === "completed"
                        ? "Completed"
                        : item.status === "in-progress"
                        ? "In Progress"
                        : "Learning"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#ff9900] font-medium text-xs">
                    {item.provider}
                  </p>
                  <p className="text-gray-400 text-xs">{item.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2">
                {item.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1 mb-3">
                {item.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-[#181e2a]/80 border border-[#ff9900]/20 text-[#ff9900] rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {item.skills.length > 3 && (
                  <span className="px-2 py-1 bg-[#181e2a]/80 border border-[#ff9900]/20 text-[#ff9900] rounded-full text-xs font-medium">
                    +{item.skills.length - 3}
                  </span>
                )}
              </div>

              {/* Action Button */}
              {item.verificationUrl && item.verificationUrl !== "#" && (
                <motion.a
                  href={item.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#ff9900] hover:text-[#ffb84d] text-sm font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Verify Certificate
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTraining;
