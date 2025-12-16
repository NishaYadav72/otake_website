import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <span style={styles.logoDot}>●</span> Otake
      </div>

      {/* Links */}
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/pricing" style={styles.link}>Pricing</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>

      {/* Auth Buttons */}
      <div style={styles.authButtons}>
        <Link to="/login" style={styles.loginBtn}>Login</Link>
        <Link to="/register" style={styles.signupBtn}>Get Started</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 60px",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#1e1e2f",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  logoDot: {
    color: "#6c63ff",
    fontSize: "28px",
  },

  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
  },

  link: {
    textDecoration: "none",
    color: "#444",
    fontWeight: "500",
    fontSize: "15px",
    transition: "0.3s",
  },

  authButtons: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  loginBtn: {
    textDecoration: "none",
    color: "#444",
    fontWeight: "500",
  },

  signupBtn: {
    textDecoration: "none",
    padding: "10px 18px",
    background: "linear-gradient(135deg, #6c63ff, #a855f7)",
    color: "#fff",
    borderRadius: "10px",
    fontWeight: "600",
    boxShadow: "0 6px 15px rgba(108,99,255,0.3)",
  },
};

export default Navbar;
