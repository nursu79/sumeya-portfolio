import React from "react";

const About = () => {
  return (
    <div
      className="main-glass my-6 max-w-3xl mx-auto px-4 py-6"
      style={{ borderRadius: 24 }}
    >
      <section
        id="about"
        className="flex flex-col md:flex-row items-center gap-6"
      >
        {/* Neon Gradient Accent Bar */}
        <div className="hidden md:block h-24 w-1 rounded-full bg-gradient-to-b from-[#a259ff] via-[#ff9900] to-[#232946] mr-4" />
        {/* Bio Card */}
        <div className="flex-1 bg-[#232946]/70 border border-[#393e5c] rounded-xl p-4 shadow-md text-left">
          <h2 className="text-2xl font-bold mb-2 neon-gradient-text">
            About Me
          </h2>
          <p className="text-base mb-3 text-gray-200">
            Hey there! I'm{" "}
            <span className="text-blue-400 font-semibold">Sumeya Ibrahim</span>{" "}
            👋 - a passionate 4th-year Software Engineering student at{" "}
            <span className="text-pink-400 font-semibold">
              Addis Ababa University (AAU)
            </span>
            . I absolutely love diving deep into fullstack development and I'm
            super excited about exploring the incredible world of{" "}
            <span className="text-purple-400 font-semibold">AI</span>! There's
            something magical about how technology can solve real-world
            problems, and I'm always eager to learn and grow in this
            ever-evolving field. 🚀
          </p>
          <p className="text-base mb-3 text-gray-200">
            What gets me really pumped is building{" "}
            <span className="text-orange-400 font-semibold">
              fullstack applications
            </span>{" "}
            from scratch! I'm talking about creating beautiful, responsive
            frontends that users love, paired with rock-solid backends that can
            handle anything. And guess what? I'm also diving headfirst into{" "}
            <span className="text-cyan-400 font-semibold">
              mobile development
            </span>{" "}
            with{" "}
            <span className="text-green-400 font-semibold">
              Angela Yu's amazing Flutter course
            </span>
            ! 📱✨ The idea of building apps that work seamlessly across
            platforms just blows my mind!
          </p>
          <p className="italic text-sm text-gray-400">
            Fun fact: I'm that person who gets genuinely excited about debugging
            at 2 AM and celebrating when a feature finally works! There's
            nothing quite like that "aha!" moment when everything clicks
            together! 💡✨
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
