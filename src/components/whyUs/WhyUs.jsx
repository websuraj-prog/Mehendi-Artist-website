import React from 'react';
import './WhyUs.css';
import MandalaTop from '../../assets/mandala-top.jpg'; 

const WhyUs = () => {
  const points = [
    {
      number: "1",
      title: "Natural & Safe Ingredients",
      text: "We craft our mehendi using 100% natural henna powder, essential oils, and lemon juice — no chemicals, just deep color and skin-safe magic."
    },
    {
      number: "2",
      title: "Skilled Artists, Signature Styles",
      text: "From timeless Rajasthani to trending Arabic designs, our artists blend tradition with trend to create personalized patterns that speak your story."
    },
    {
      number: "3",
      title: "Pan-India with Custom Packages",
      text: "Wherever you are in India, we deliver tailored mehendi experiences at fair prices — perfect for every occasion and every budget."
    },
    {
      number: "4",
      title: "Modern Elegance, Timeless Charm",
      text: "We reinvent traditional mehendi with a modern twist — making your hands not just beautiful, but unforgettable."
    }
  ];

  return (
    <div className="why-us-section" id="why-us">
      <h2 className="why-us-title">Why Us</h2>
      <div className="why-us-cards">
        {points.map((point, index) => (
          <div key={index} className="why-us-card">
            <img src={MandalaTop} alt="" className="mandala-icon" />
            <h3 className="card-number">{point.number}</h3>
            <h4 className="card-title">{point.title}</h4>
            <p className="card-text">{point.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
