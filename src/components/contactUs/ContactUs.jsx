import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_j7ql5od',     
            'template_03n62d8',  
            form.current,
            'X_ilxLX0xOD70Y7u_'    
        )
        .then((result) => {
            alert('Message sent successfully!');
            form.current.reset(); 
        })
        .catch((error) => {
            alert('Failed to send message. Please try again.');
            console.error(error.text);
        });
    };

    return (
        <div className="contact-container">
            <h2 className="contact-heading" id="contact">Contact Us</h2>
            
            <div className="contact-info" >
                <div className="info-box">
                    <i className="fas fa-map-marker-alt icon"></i>
                    <h4>Our Office Address</h4>
                    <p>
                        Deep Pride CHS, 101-102/E, 1st Floor,<br />
                        Near Ayush Hospital, Yashwant Gaurav,<br />
                        Nallasopara West, Maharashtra 401203
                    </p>
                </div>
                <div className="info-box">
                    <i className="fas fa-envelope icon"></i>
                    <h4>General Enquiries</h4>
                    <p>amritavishwakarma027@gmail.com</p>
                </div>
                <div className="info-box">
                    <i className="fas fa-phone icon"></i>
                    <h4>Call Us</h4>
                    <p>+91-7843058657</p>
                </div>
                <div className="info-box">
                    <i className="fas fa-clock icon"></i>
                    <h4>Our Timings</h4>
                    <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
                </div>
            </div>

            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="input-row">
                    <input type="text" name="name" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email ID" required />
                    <input type="text" name="phone" placeholder="Mobile Number" required />
                </div>
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
