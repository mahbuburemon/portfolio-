import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import picture from '../../../images/personal/circle.png'

const AboutUs = () => {
    return (
        <>
            <Container>
                <h2 className="p-5 m-4">About Me</h2>
                <Row gy-3>
                    <Col xs={12} md={6}>
                        <img style={{ height: '500px', width: '100%' }} src={picture} alt="" />
                    </Col>
                    <Col className="d-flex align-items-center" xs={12} md={6}>
                        <div>
                            <div>
                                <p >I am a Full Stack Web Developer and have great experience in MERN-Stack development. I build high-end, user-friendly, responsive websites and maintain all the following parts like Security, Performance, User friendly, Bug-free (security + frontend view), Proper maintainability code, etc. Always eager to adopt new technologies to become a High-level programmer.


                                </p>
                            </div>
                            <button type="button" class="btn btn-outline-dark border-2 border-danger m-3">Hire Me..</button>
                        </div>





                    </Col>

                </Row>


            </Container>
        </>
    );
};

export default AboutUs;