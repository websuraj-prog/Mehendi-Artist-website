import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="map-section">
                <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.587764250631!2d72.81090647498685!3d19.43020958184866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a965d18bd91b%3A0xaca14dea61600a1!2sDEEP%20PRIDE!5e0!3m2!1sen!2sin!4v1746882367174!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <a
                    className="map-button"
                    href="https://maps.app.goo.gl/WHS8pqPGHaAiePqT7"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get Direction <i className="fas fa-location-arrow"></i>
                </a>
            </div>

            <div className="footer-links">
                <div>
                    <h4>USEFUL LINKS</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Services</li>
                        <li>Why Us</li>
                        <li>↓ More</li>
                    </ul>
                </div>
                <div>
                    <h4>NAVIGATION</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Gallery</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div>
                    <h4>CONTACT</h4>
                    <p>
                        Deep Pride CHS, 101-102/E, 1st Floor,<br />
                        Near Ayush Hospital, Yashwant Gaurav,<br />
                        Nallasopara West, Maharashtra 401203
                    </p>
                    <p>+91-7843058657</p>
                    <p>amritavishwakarma027gmail.com</p>
                </div>
                <div className="connect">
                    <h4>CONNECT</h4>
                     <div className="social-icons2">
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
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Memorable Henna Artists. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
