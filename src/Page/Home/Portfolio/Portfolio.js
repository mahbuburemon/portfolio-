import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import edupark from '../../../images/project/edupark.PNG'
import doctorbariup from '../../../images/project/doctorbariup.PNG'
import miniso from '../../../images/project/miniso.PNG'
import ghurbo from '../../../images/project/ghurbo.PNG'
import pixel from '../../../images/project/pixel.PNG'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    }, [])
    return (
        <div className=" body container  ">

            <h2 id="services" className="p-5 fw-bold">My Latest Projects</h2>

            <div className="p-4 justify-content-center row row-cols-12 row-cols-md-6 row-cols-lg-3 g-4">
                <div>
                    <div className=" container">
                        <div className="col">
                            <div className="card">
                                <img style={{ width: '100%', height: '200px' }} src={edupark} className="card-img-top" data-aos="fade-left" alt="..." />
                                <div className="card-body">

                                    <Link to={`/details`}>
                                        <button className="btn btn-info rounded-2"
                                        >Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="service container">
                        <div className="col">
                            <div className="card">
                                <img style={{ width: '100%', height: '200px' }} src={doctorbariup} className="card-img-top " data-aos="fade-right" alt="..." />
                                <div className="card-body">

                                    <Link to={`/details`}>
                                        <button className="btn btn-info rounded-2"
                                        >Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="col">
                            <div className="card">
                                <img style={{ width: '100%', height: '200px' }} src={miniso} className="card-img-top " data-aos="fade-left" alt="..." />
                                <div className="card-body">

                                    <Link to={`/details`}>
                                        <button className="btn btn-info rounded-2"
                                        >Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="col">
                            <div className="card">
                                <img style={{ width: '100%', height: '200px' }} src={ghurbo} className="card-img-top " data-aos="fade-right" alt="..." />
                                <div className="card-body">

                                    <Link to={`/details`}>
                                        <button className="btn btn-info rounded-2"
                                        >Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="col">
                            <div className="card">
                                <img style={{ width: '100%', height: '200px' }} src={pixel} className="card-img-top " data-aos="fade-left" alt="..." />
                                <div className="card-body">

                                    <Link to={`/details`}>
                                        <button className="btn btn-info rounded-2"
                                        >Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;