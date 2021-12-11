import React, { useEffect } from 'react';
import './Skills.css';
import html from '../../../images/html1.jpg';
import css from '../../../images/skills/css.png';
import tailwind from '../../../images/skills/tailwind.png';
import javascript from '../../../images/skills/javascript.png';
import react from '../../../images/skills/react.png';
import material from '../../../images/skills/material.png';
import firebase from '../../../images/skills/firebase.png';
import express from '../../../images/skills/express.png';
import node from '../../../images/skills/node.png';
import mongo from '../../../images/skills/mongo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    }, [])
    return (
        <div className="skills container">
            <h2 className="m-4 p-3 justify-content-center" id="skills">Skills</h2>
            <div className="row  row-cols-md-2 row-cols-lg-2 row-cols-sm-1 gy-3 justify-content-center ">

                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={html} data-aos="fade-up" alt="..." />
                    <p>HTML</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={css} data-aos="fade-up" alt="..." />
                    <p>CSS</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={tailwind} data-aos="fade-up" alt="..." />
                    <p>Tailwind</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={javascript} data-aos="fade-up" alt="..." />
                    <p>javascript</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={react} data-aos="fade-up" alt="..." />
                    <p>react</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={material} data-aos="fade-up" alt="..." />
                    <p>material</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={firebase} data-aos="fade-up" alt="..." />
                    <p>firebase</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={express} data-aos="fade-up" alt="..." />
                    <p>express</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={node} data-aos="fade-up" alt="..." />
                    <p>node js</p>
                </div>
                <div className="card col-sm-12 col-md-6 col-lg-4 justify-content-center align-items-center" style={{ width: '18rem' }}>
                    <img style={{ height: '100px', width: '150px' }} className="p-2 " src={mongo} data-aos="fade-up" alt="..." />
                    <p>mongoDB</p>
                </div>

            </div>


        </div>
    );
};

export default Skills;