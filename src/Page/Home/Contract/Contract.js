import React from 'react';
import picture from '../../../images/personal/circle2.png'

const Contract = () => {
    return (
        <div>
            <h2 className="m-4 p-3 justify-content-center">Contact Me</h2>

            <div className="row gx-2 row-cols-md-2 row-cols-lg-2 row-cols-sm-1" id="contact">


                <div className="col col-md-12 col-lg-6 ">
                    <form className="d-flex flex-column m-5 p-5 bg-dark gy-3">
                        <input type="text" className="contact-name p-2  m-2" placeholder="Your Name" />
                        <br />
                        <input type="email" className="contact-email p-2 m-2" placeholder="Your Email" />
                        <br />
                        <input type="text" className="contact-sub p-2 m-2" placeholder="Subject" />
                        <br />
                        <textarea type="text" className="contact-sub p-2 m-2" placeholder="Message" />
                        <br />

                        <button type="submit" className="border-2 border-danger rounded-2">Send</button>
                    </form>
                </div>
                <div className="col p-2 col-md-12 col-lg-6">
                    <img style={{ height: '550px', width: '90%' }} src={picture} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Contract;