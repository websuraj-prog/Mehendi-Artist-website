import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "About Us", path: "#about" },
    { name: "Why Us", path: "#why-us" },
    { name: "Gallery", path: "#gallery" },
    { name: "Reviews", path: "#reviews" },
    { name: "Contact Us", path: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.path} onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? "rotate1" : ""}`}></span>
          <span className={`bar ${isOpen ? "hide" : ""}`}></span>
          <span className={`bar ${isOpen ? "rotate2" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
