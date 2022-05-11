import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Features } from "./components/Features";
import { Navbar } from "./components/Navbar";
import { Catagories } from "./components/Catagories";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Review } from "./components/Review";
import { Community } from "./components/Community";
import { Team } from "./components/Team";
import Login from "./components/Login/login";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/catagories" element={<Catagories />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
