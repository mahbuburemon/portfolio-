import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>

                    <Navbar.Brand href="#home">Mahbubur's World</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="navbar justify-content-end " >

                        <Nav.Link style={{ color: 'antiquewhite' }} to="/home">Home</Nav.Link>
                        <Nav.Link style={{ color: 'antiquewhite' }} to="/about">About</Nav.Link>
                        <Nav.Link style={{ color: 'antiquewhite' }} to="/skills">Skills</Nav.Link>
                        <Nav.Link style={{ color: 'antiquewhite' }} to="/services">Services</Nav.Link>
                        <Nav.Link style={{ color: 'antiquewhite' }} to="/contract">Contract</Nav.Link>


                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    );
};

export default NavBar;