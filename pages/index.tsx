import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import SocialCarousel from "../components/SocialCarousel";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import EducationTraining from "../components/EducationTraining";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumeya Ibrahim | Fullstack Developer Portfolio ✨</title>
        <meta
          name="description"
          content="Fullstack developer passionate about creating beautiful, functional, and user-friendly digital experiences. Specialized in React, Node.js, and modern web technologies."
        />
      </Head>
      <Hero />
      <About />
      <SocialCarousel />
      <Skills />
      <Projects />
      <EducationTraining />
      <Contact />
    </>
  );
}
