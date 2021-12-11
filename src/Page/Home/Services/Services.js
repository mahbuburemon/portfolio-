import React, { useEffect } from 'react';

import './Services'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    }, [])
    return (
        <div className=" body container   ">

            <h2 id="services" className="p-5 fw-bold">Services</h2>

            <div className="p-4 justify-content-center row row-cols-12 row-cols-md-6 row-cols-lg-3 g-4">
                <div>
                    <div className="service container">
                        <div className="col">
                            <div className=" card justify-content-center">
                                <div className=" card desigin border border-2 border-info">

                                    <h2 className="p-2" data-aos="fade-up">WEB DESIGN</h2>

                                    <p className="p-2 para" data-aos="fade-right">In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className=" container">
                        <div className="col">
                            <div className="  justify-content-center">
                                <div className="border border-2 border-info">

                                    <h2 className="p-2" data-aos="fade-up">WEB DEVELOPMENT</h2>

                                    <p className="p-2" data-aos="fade-right">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className=" container">
                        <div className="col">
                            <div className="  justify-content-center">
                                <div className="border border-2 border-info">

                                    <h2 className="p-2" data-aos="fade-up">RESPONSIVE DESIGN</h2>

                                    <p className="p-2" data-aos="fade-right">Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className=" container">
                        <div className="col">
                            <div className="  justify-content-center">
                                <div className="border border-2 border-info">

                                    <h2 className="p-2" data-aos="fade-up">BUG FIXING</h2>

                                    <p className="p-2" data-aos="fade-right">A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className=" container">
                        <div className="col">
                            <div className="  justify-content-center">
                                <div className="border border-2 border-info">

                                    <h2 className="p-2" data-aos="fade-up">WEB APP DEVELOPMENT</h2>

                                    <p className="p-2" data-aos="fade-right">Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. Client refers to a computer application such as a web browser.It's Amazing</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;