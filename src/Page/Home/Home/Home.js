import React, { useEffect, useRef } from 'react';
import './Home.css'
import { init } from 'ityped'
import AboutUs from '../AboutUs/AboutUs';
import Contract from '../Contract/Contract';



const Home = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['MERN Stack Developer', 'UI & UX Designer']


        })

    }, [])
    return (
        <div>
            <div className="home p-4">
                <div className="main-info">
                    <h1>HI There</h1>
                    <h2>I'M <span style={{ color: '#ffffff	' }}>Md Mahbubur Rahman</span></h2>
                    <h3 > <span ref={textRef}></span>
                    </h3>

                    <a type="button" className="btn-resume btn " href="https://drive.google.com/file/d/1h8q_IJd87hsXHrYGeh8kbrU2bAcFFO3o/view?usp=sharing" >Downlode Resume</a>


                </div>


            </div>
            <div>
                <AboutUs></AboutUs>
                <Contract></Contract>
            </div>
        </div>
    );
};

export default Home;