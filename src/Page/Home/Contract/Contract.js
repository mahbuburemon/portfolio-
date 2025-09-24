import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Contract.css";

const Contract = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zh08mpr",   // 🔹 Replace with your Service ID
        "template_x7btvt9",  // 🔹 Replace with your Template ID
        form.current,
        "9oMlpHzMwpojKBVXE"    // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear form
        },
        (error) => {
          alert("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <input type="text" name="name" required />
          <label>Name</label>
        </div>
        <div className="input-group">
          <input type="email" name="email" required />
          <label>Email</label>
        </div>
        <div className="input-group">
          <input type="text" name="subject" required />
          <label>Subject</label>
        </div>
        <div className="input-group">
          <textarea rows="5" name="message" required></textarea>
          <label>Message</label>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contract;
