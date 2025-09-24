import React, { useEffect, useRef } from "react";
import "./Home.css";
import { init } from "ityped";
import { motion } from "framer-motion"; // 🚀 Animation
import AboutUs from "../AboutUs/AboutUs";
import Contract from "../Contract/Contract";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Developer", "UI & UX Designer", "Problem Solver"],
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="home">
        <div className="overlay"></div>

        <div className="main-info">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi There 👋
          </motion.h1>

          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            I'M <span className="highlighted">Md Mahbubur Rahman</span>
          </motion.h1>

          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="typed"
          >
            <span ref={textRef}></span>
          </motion.h3>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-resume"
            href="/Pdf/emon.pdf"
            download="Mahbubur_Rahman_Resume.pdf"
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Other Sections */}
      <AboutUs />
      <Skills />
      <Services />
      <Portfolio />
      <Contract />
    </div>
  );
};

export default Home;
