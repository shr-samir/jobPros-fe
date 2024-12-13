import React from "react";
import { About, Contact, Employer, Home, Jobs, Login, Register } from "./pages";
import { Footer, Navbar } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./pages/Profile";


const App = () => {
  const location = useLocation();

  const hideNavigation = ["/dashboard", "/profile"];

  const isNavigationHidden = hideNavigation.includes(location.pathname);
  return (
    <div className="flex flex-col h-screen">
      {isNavigationHidden ? "" : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Employer />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {isNavigationHidden ? "" : <Footer />}
    </div>
  );
};

export default App;
