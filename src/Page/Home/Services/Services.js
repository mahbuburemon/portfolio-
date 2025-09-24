import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Monitor, Smartphone, Bug, Globe } from "lucide-react"; // icons

import "./Services.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  const services = [
    {
      title: "Web Design",
      desc: "Crafting visually appealing and user-friendly designs that make your website stand out.",
      icon: <Monitor size={40} />,
    },
    {
      title: "Web Development",
      desc: "Building fast, scalable, and functional websites with modern technologies.",
      icon: <Code size={40} />,
    },
    {
      title: "Responsive Design",
      desc: "Ensuring flawless experience across all devices with adaptive layouts.",
      icon: <Smartphone size={40} />,
    },
    {
      title: "Bug Fixing",
      desc: "Debugging and fixing errors to keep your application running smoothly.",
      icon: <Bug size={40} />,
    },
    {
      title: "Web App Development",
      desc: "Developing powerful web applications tailored to your business needs.",
      icon: <Globe size={40} />,
    },
  ];

  return (
    <div className="services-section container py-5">
      <h2
        id="services"
        className="fw-bold text-center mb-5"
        data-aos="fade-down"
      >
        🚀 My Services
      </h2>

      <div className="row g-4 justify-content-center">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="service-card p-4" data-aos="zoom-in">
              <div className="service-icon mb-3">{service.icon}</div>
              <h4 className="fw-bold">{service.title}</h4>
              <p className="service-desc">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
