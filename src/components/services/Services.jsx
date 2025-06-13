import React from 'react';
import './Services.css';

import BridalImg from '../../assets/BridalImg.jpg';
import EnggagementImg from '../../assets/EnggagementImg.jpg';
import FestiveImg from '../../assets/FestiveImg.jpg';
import TrainingImg from '../../assets/TrainingImg.jpeg';

const Services = () => {
  const serviceList = [
    {
      title: 'Bridal Mehendi Services',
      description:
        'Mehendi is considered auspicious in indian traditions in all cultures, Celebrate your big day with stunning, timeless mehendi designs crafted just for brides.',
      image: BridalImg,
    },
    {
      title: 'Engagement Mehendi Services',
      description:
        'For brides-to-be on their special pre-wedding day. Elegant yet minimal designs suited for engagement ceremonies.',
      image: EnggagementImg,
    },
    {
      title: 'Festive Mehendi Services',
      description:
        'Celebrate festivals like Karva Chauth, Teej, Eid, and Diwali with customized mehndi patterns that match the occasion.',
      image: FestiveImg,
    },
    {
      title: 'Professional Training',
      description:
        'Enjoyable skills that can earn you income for years to come. More the practice, the better is the perfection.',
      image: TrainingImg,
    },
  ];

  return (
    <section className="services-section" >
      <h2 className="services-title" id='services'>Services</h2>
      <div className="services-container">
        {serviceList.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-img" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="enquire-btn">Enquire Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
