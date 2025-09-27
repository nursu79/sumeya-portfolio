import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok) throw new Error(data.error || "Failed");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "sumeyanur7@gmail.com",
      link: "mailto:sumeyanur7@gmail.com",
      description: "Get in touch via email",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "+251940790416",
      link: "tel:+251940790416",
      description: "Call me directly",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Location",
      value: "Addis Abeba, Ethiopia",
      link: "#",
      description: "Based in Addis Abeba",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
      description: "Usually respond quickly",
    },
  ];

  return (
    <section id="contact" className="py-8 px-4">
      <div
        className="main-glass max-w-4xl mx-auto px-4 py-6"
        style={{ borderRadius: 32 }}
      >
        <h2 className="text-2xl font-bold mb-3 neon-gradient-text text-center">
          Let's Work Together
        </h2>
        <p className="text-gray-300 text-center mb-8 text-sm max-w-xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your ideas to
          life.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  className="bg-[#232946]/70 border border-[#393e5c] rounded-lg p-4 hover:border-[#ff9900] hover:shadow-[0_0_12px_3px_rgba(255,153,0,0.2)] transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-[#ff9900] group-hover:text-[#ffb84d] transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-sm mb-1">
                        {method.title}
                      </h4>
                      <p className="text-[#ff9900] font-medium text-xs mb-1">
                        {method.value}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-white mb-3">Follow Me</h4>
              <div className="flex space-x-3">
                {[
                  {
                    name: "GitHub",
                    icon: "🧑‍💻",
                    url: "https://github.com/nursu79",
                  },
                  {
                    name: "LinkedIn",
                    icon: "💼",
                    url: "https://www.linkedin.com/in/sumeya-issa-6ba350339",
                  },
                  {
                    name: "Telegram",
                    icon: "✈️",
                    url: "https://t.me/poetic4life",
                  },
                  {
                    name: "Instagram",
                    icon: "📸",
                    url: "https://www.instagram.com/poetic4_life?igsh=NXhpdjRrdmljZ21l",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#232946] border border-[#393e5c] rounded-full flex items-center justify-center text-lg hover:border-[#ff9900] hover:shadow-[0_0_8px_2px_rgba(255,153,0,0.3)] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 bg-[#181e2a] border border-[#393e5c] rounded-lg text-white placeholder-gray-400 focus:border-[#ff9900] focus:outline-none focus:shadow-[0_0_6px_2px_rgba(255,153,0,0.2)] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 bg-[#181e2a] border border-[#393e5c] rounded-lg text-white placeholder-gray-400 focus:border-[#ff9900] focus:outline-none focus:shadow-[0_0_6px_2px_rgba(255,153,0,0.2)] transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="w-full px-3 py-2 bg-[#181e2a] border border-[#393e5c] rounded-lg text-white placeholder-gray-400 focus:border-[#ff9900] focus:outline-none focus:shadow-[0_0_6px_2px_rgba(255,153,0,0.2)] transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-[#181e2a] border border-[#393e5c] rounded-lg text-white placeholder-gray-400 focus:border-[#ff9900] focus:outline-none focus:shadow-[0_0_6px_2px_rgba(255,153,0,0.2)] transition-all duration-300 resize-none text-sm"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                >
                  ❌ Something went wrong. Please try again.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-[#ff9900] text-[#181e2a] rounded-lg font-bold text-sm hover:bg-[#ffb84d] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-[0_0_12px_3px_rgba(255,153,0,0.3)]"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#181e2a]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
