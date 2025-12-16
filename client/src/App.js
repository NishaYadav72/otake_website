import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <h1 style={{ padding: 40 }}>Home Page</h1>;
const About = () => <h1 style={{ padding: 40 }}>About Page</h1>;
const Pricing = () => <h1 style={{ padding: 40 }}>Pricing Page</h1>;
const Contact = () => <h1 style={{ padding: 40 }}>Contact Page</h1>;
const Login = () => <h1 style={{ padding: 40 }}>Login Page</h1>;
const Register = () => <h1 style={{ padding: 40 }}>Register Page</h1>;

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
