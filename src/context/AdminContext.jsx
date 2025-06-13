// context/AdminContext.jsx
import React, { createContext, useState, useContext } from "react";

const AdminContext = createContext();

const ADMIN_EMAIL = "amritavishwakarma027@gmail.com";
const ADMIN_PASSWORD = "Amrita@01";

export const AdminProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const login = (email, password) => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAdminLoggedIn(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <AdminContext.Provider value={{ isAdminLoggedIn, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
