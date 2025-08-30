import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-container">
        <div className="contact-content">
          {/* Left Side - Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              <strong>📍 Address:</strong> Sohra UPVC Industries, Shillong, Meghalaya
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>📧 Email:</strong> info@sohraupvc.com
            </p>

            {/* Google Map Embed */}
            <div className="map-container">
              <iframe
                title="sohra-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.109!2d91.8933!3d25.5665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM0JzAwLjAiTiA5McKwNTMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1670000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
