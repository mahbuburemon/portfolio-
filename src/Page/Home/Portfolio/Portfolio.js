import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import edupark from "../../../images/project/edupark.PNG";
import doctorbariup from "../../../images/project/doctorbariup.PNG";
import miniso from "../../../images/project/miniso.PNG";
import ghurbo from "../../../images/project/ghurbo.PNG";
import pixel from "../../../images/project/pixel.PNG";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  }, []);

  const projects = [
    { img: edupark, title: "Edupark Project", aos: "fade-left" },
    { img: doctorbariup, title: "Doctorbari Up", aos: "fade-right" },
    { img: miniso, title: "Miniso Project", aos: "fade-left" },
    { img: ghurbo, title: "Ghurbo Project", aos: "fade-right" },
    { img: pixel, title: "Pixel Project", aos: "fade-left" },
  ];

  return (
    <div className="container py-5">
      <h2
        className="text-center fw-bold mb-5 gradient-text"
        data-aos="fade-down"
      >
        🌟 My Latest Projects
      </h2>

      <div className="row g-4 justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="service-card" data-aos={project.aos}>
              <img
                src={project.img}
                alt={project.title}
                className="service-img"
              />
              <div className="service-content">
                <h3 className="service-title">{project.title}</h3>
                <p className="service-desc">
                  This is a modern, professional, and fancy project card design
                  similar to the Services section.
                </p>
                <Link to={`/details`}>
                  <button className="btn btn-gradient">View Details</button>
                </Link>
              </div>
              <div className="glow-border"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
