import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>

                    <Navbar.Brand href="#home">Mahbubur's World</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="navbar justify-content-end " >

                        <Nav.Link as={HashLink} style={{ color: 'antiquewhite' }} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} style={{ color: 'antiquewhite' }} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} style={{ color: 'antiquewhite' }} to="/home#skills">Skills</Nav.Link>
                        <Nav.Link as={HashLink} style={{ color: 'antiquewhite' }} to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} style={{ color: 'antiquewhite' }} to="/contract">Contract</Nav.Link>


                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    );
};

export default NavBar;