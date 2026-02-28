"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-gray-200 scroll-smooth overflow-hidden">

      {/* Static Glow Background (No Random = No Hydration Error) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-20 top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[180px] opacity-20 bottom-[-150px] right-[-150px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/30 dark:bg-black/40 border-b border-gray-300 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">NK</h1>
          <div className="flex gap-8 text-sm">
            <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 max-w-6xl mx-auto px-6 space-y-32">

        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
          className="text-center space-y-6"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nitesh Kumar
          </h1>

          <p className="text-2xl text-gray-500 dark:text-gray-400">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Backend Engineer",
                "Data & AI Practitioner"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="max-w-3xl mx-auto text-gray-500 dark:text-gray-400">
            Computer Science Graduate (B.Tech 2025) with industry experience
            in backend systems, AI model development, and production-ready web applications.
          </p>

          <div className="flex justify-center gap-6 pt-6 flex-wrap">
            <a href="/resume.pdf" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition">
              Resume
            </a>

            <a href="https://github.com/Nk-987" target="_blank"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:scale-105 transition">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/nitesh-kumar-2b99b1269/" target="_blank"
              className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:scale-105 transition">
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-semibold text-center">Experience</h2>

          <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-300 dark:border-gray-800 space-y-4">
            <h3 className="text-2xl font-semibold text-blue-500">
              Placify Technologies — Data Science & AI Intern
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              September 2024 – December 2024
            </p>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-2">
              <li>Developed AI models for aviation detection and segmentation.</li>
              <li>Improved image processing pipelines and backend performance.</li>
              <li>Worked with Git & Docker-based workflows.</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-300 dark:border-gray-800 space-y-4">
            <h3 className="text-2xl font-semibold text-blue-500">
              Placify Technologies — Full Stack Developer Intern
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              February 2025 – September 2025
            </p>
            <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-2">
              <li>Built Angular & NestJS production applications.</li>
              <li>Implemented JWT authentication and REST APIs.</li>
              <li>Optimized SEO and performance bottlenecks.</li>
            </ul>
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-semibold text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-10">

            <Tilt scale={1.02}>
              <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-300 dark:border-gray-800 space-y-4">
                <h3 className="text-2xl font-semibold text-blue-500">
                  House Rental Price Prediction
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  ML models using XGBoost & LightGBM deployed with FastAPI & Docker.
                </p>
              </div>
            </Tilt>

            <Tilt scale={1.02}>
              <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-gray-300 dark:border-gray-800 space-y-4">
                <h3 className="text-2xl font-semibold text-blue-500">
                  Weather Dashboard
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Interactive dashboard using OpenWeather API & data visualization.
                </p>
              </div>
            </Tilt>

          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariant}
          viewport={{ once: true }}
          className="text-center pb-20"
        >
          <h2 className="text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-500 dark:text-gray-400">
            niteshk1407@gmail.com
          </p>
        </motion.section>

      </main>

      <footer className="text-center text-gray-500 dark:text-gray-600 pb-10">
        © 2025 Nitesh Kumar
      </footer>
    </div>
  );
}