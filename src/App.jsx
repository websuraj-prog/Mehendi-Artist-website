import React, { useRef } from "react";
import { AdminProvider, useAdmin } from "./context/AdminContext.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from "./components/home/HomePage";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import About from "./components/about/AboutUS";
import WhyUs from "./components/whyUs/WhyUs";
import Gallery from "./components/gallery/Gallery";
import Review from "./components/review/Review";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer.jsx";
import AdminPage from "./components/AdminPage.jsx";


function AdminToggleButton() {
  const { isAdminLoggedIn, login, logout } = useAdmin();

  const handleClick = async () => {
    if (isAdminLoggedIn) {
      logout();
    } else {
      const email = prompt("Enter Admin Email:");
      const password = prompt("Enter Admin Password:");

      if (!email || !password) {
        alert("Both email and password are required.");
        return;
      }

      const success = await login(email, password);
      if (!success) {
        alert("Login failed. Incorrect email or password.");
      }
    }
  };

  return (
    <button
      className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      onClick={handleClick}
    >
      {isAdminLoggedIn ? "Logout (Admin)" : "Admin"}
    </button>
  );
}

function MainApp() {
  const contactRef = useRef(null);
  const { isAdminLoggedIn } = useAdmin();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isAdminLoggedIn) {
    return <AdminPage />;
  }

  return (
    <div>
      <AdminToggleButton />
      <Navbar />
      <Home scrollToContact={scrollToContact} />
      <Services />
      <About />
      <WhyUs />
      <Gallery />
      <Review />
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <MainApp />
    </AdminProvider>
  );
}

export default App;
