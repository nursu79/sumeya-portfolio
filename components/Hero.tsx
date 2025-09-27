import React from "react";
import HERO from "./HERO.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="main-glass relative flex flex-col md:flex-row items-center justify-between px-4 py-6 overflow-hidden mt-10 max-w-2xl mx-auto"
      style={{
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.12)",
        border: "1.5px solid #232946",
        borderRadius: 16,
      }}
    >
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center items-start z-10 max-w-xl">
        <h1
          className="text-3xl md:text-4xl font-extrabold uppercase mb-4 neon-gradient-text font-sans"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          FULLSTACK
          <br />
          DEVELOPER
        </h1>
        <p
          className="text-sm md:text-base text-gray-200 mb-4 font-sans leading-relaxed"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          I build digital solutions that drive business growth. With{" "}
          <span className="text-[#ff9900] font-semibold">2.5 years</span> of
          fullstack development experience, I craft everything from{" "}
          <span className="text-blue-400">sleek frontends</span> to{" "}
          <span className="text-pink-400">robust backends</span>. Currently
          expanding into{" "}
          <span className="text-cyan-400">mobile development</span> and{" "}
          <span className="text-purple-400">AI integration</span> to stay ahead
          of the curve.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 w-full">
          <a
            href="#projects"
            className="neon-btn font-sans text-center w-full sm:w-auto py-2 px-4 text-sm"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            VIEW PROJECTS
          </a>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn font-sans text-center w-full sm:w-auto py-2 px-4 text-sm bg-transparent border-2 border-[#ff9900] text-[#ff9900] hover:bg-[#ff9900] hover:text-[#181e2a] transition-all duration-300"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center relative mt-8 md:mt-0">
        <div className="relative z-10">
          <img
            src={HERO.src}
            alt="Sumeya Ibrahim profile"
            className="w-60 md:w-64 aspect-[3/4] object-cover rounded-xl bg-[#181e2a] ring-2 ring-[#ff9900]/60 shadow-[0_0_24px_rgba(255,153,0,0.22)]"
            style={{ background: "transparent", borderRadius: 16 }}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
