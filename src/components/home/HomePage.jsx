import React, { useRef } from 'react';
import './HomePage.css';
import mehndiImage from '../../assets/mehndi.jpeg';
import LogoImg from '../../assets/logo.png';

const Home = ({ scrollToContact }) => {
  return (
    <div id='home'>
      {/* Top Bar with Social + Contact */}
      <div className="top-bar">
        <div className="left">
          <div className="social-icons">
            <a href="mailto:amritavishwakarma027@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/its_memorable_heena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/qr/YPBDZYJDZTJQF1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="contact-info">
            <span><i className="fas fa-phone-alt"></i> +91 7843058657</span>
            <span><i className="fas fa-envelope"></i> amritavishwakarma027@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-logo">
          <img src={LogoImg} alt="Logo" />
        </div>
        <div className="hero-text">
          <h2>Mehndi Designs To Make You</h2>
          <h1>Fall in Love</h1>
          <button className="enquire-btn" onClick={scrollToContact}>
            Enquire Now
          </button>
        </div>
        <div className="hero-img">
          <img src={mehndiImage} alt="Mehndi Hands" />
        </div>
      </section>
      <div className="bottum-bar"></div>
    </div>
  );
};

export default Home;
