import React from 'react';
import './AboutUs.css';
import AboutBg from '../../assets/AboutImg.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-section" id="about">
      <div className="aboutBackground">
        <img src={AboutBg} alt="About Background" />
      </div>
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          At Unique Mehendi Artists, we believe mehendi is more than art—it's emotion, tradition, and timeless beauty.
          Proudly serving clients across India, we specialize in transforming hands into canvases of intricate elegance.
          Whether it's a bridal celebration or a festive occasion, our designs speak stories of grace, culture, and individuality.
          With years of experience and a passion for perfection, we bring modern flair to traditional henna—making every design not just beautiful, but unforgettable.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
