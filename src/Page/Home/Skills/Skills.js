import React, { useEffect } from "react";
import "./Skills.css";
import html from "../../../images/html1.jpg";
import css from "../../../images/skills/css.png";
import tailwind from "../../../images/skills/tailwind.png";
import javascript from "../../../images/skills/javascript.png";
import react from "../../../images/skills/react.png";
import material from "../../../images/skills/material.png";
import firebase from "../../../images/skills/firebase.png";
import express from "../../../images/skills/express.png";
import node from "../../../images/skills/node.png";
import mongo from "../../../images/skills/mongo.png";
import python from "../../../images/skills/python1.png";
import django from "../../../images/skills/django.png";

import AOS from "aos";
import "aos/dist/aos.css";
const skills = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: python, name: "Python" },
  { img: django, name: "Django" },
  { img: tailwind, name: "Tailwind CSS" },
  { img: javascript, name: "JavaScript" },
  { img: react, name: "React.js" },
  { img: material, name: "Material UI" },
  { img: firebase, name: "Firebase" },
  { img: express, name: "Express.js" },
  { img: node, name: "Node.js" },
  { img: mongo, name: "MongoDB" },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="skills container py-5" id="skills">
      <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
        🚀 My Technical Skills
      </h2>

      <div className="row justify-content-center g-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            data-aos="zoom-in"
          >
            <div className="skill-card text-center p-4">
              <img
                src={skill.img}
                alt={skill.name}
                className="skill-icon mb-3"
              />
              <h5 className="fw-semibold">{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
