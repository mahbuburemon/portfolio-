import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="brand-text">
          Mahbubur's World
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={HashLink} className="nav-link-custom" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} className="nav-link-custom" to="/about">
              About
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="nav-link-custom"
              to="/home#skills"
            >
              Skills
            </Nav.Link>
            <Nav.Link as={HashLink} className="nav-link-custom" to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} className="nav-link-custom" to="/contract">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
