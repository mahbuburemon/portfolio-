import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import picture from "../../../images/personal/circle.png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        {/* Section Title */}
        <motion.h2
          className="text-center mb-5 fw-bold display-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-danger">Me</span>
        </motion.h2>

        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <motion.img
              src={picture}
              alt="Profile"
              className="rounded-circle shadow-lg"
              style={{ height: "350px", width: "350px", objectFit: "cover" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </Col>

          {/* Right Side - Content */}
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="lead text-secondary">
                I’m a{" "}
                <span className="fw-bold text-dark">
                  Full-Stack Web Developer
                </span>
                with over <span className="text-danger fw-bold">2 years</span>{" "}
                of hands-on experience in designing and developing modern web
                applications.
              </p>
              <p className="text-muted">
                My expertise lies in <b>React.js</b>, <b>Django</b>, and{" "}
                <b>Node.js</b>. I specialize in building responsive, scalable,
                and user-friendly solutions. I enjoy solving complex problems,
                integrating APIs, and managing databases to ensure seamless
                functionality across applications.
              </p>

              {/* Hire Me Button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn btn-danger px-4 py-2 rounded-pill fw-semibold shadow-sm"
              >
                Hire Me 🚀
              </motion.a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
