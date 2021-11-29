import React from 'react';
import picture from '../../../images/personal/circle2.png'

const Contract = () => {
    return (
        <div className=" row contact container" id="contact">
            <h2 className="m-4 p-3">Contact Me</h2>


            <div className="right col-6 d-flex align-items-center bg-danger p-2  ">
                <form className="p-3 m-5">
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
            <div className="left col-6">
                <img style={{ height: '400px', width: '330px' }} src={picture} alt="" />
            </div>

        </div>
    );
};

export default Contract;