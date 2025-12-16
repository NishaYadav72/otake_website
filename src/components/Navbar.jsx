import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={styles.navbar}>
        {/* Logo */}
        <Link to="/" style={styles.logoLink}>
          <div style={styles.logo}>
            <span style={styles.logoCircle}></span>
            Otake
          </div>
        </Link>

        {/* Desktop Links */}
        <ul style={styles.centerLinks} className="desktop">
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><Link to="/pricing" style={styles.link}>Pricing</Link></li>
          <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        </ul>

        {/* Desktop Right */}
        <div style={styles.right} className="desktop">
          <Link to="/login" style={styles.signIn}>Sign In</Link>
          <Link to="/register" style={styles.tryBtn}>Try for Free</Link>
        </div>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>☰</div>
      </nav>

      {/* Sidebar */}
      <div
        style={{
          ...styles.sidebar,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <Link to="/about" style={styles.sidebarLink} onClick={() => setOpen(false)}>About</Link>
        <Link to="/pricing" style={styles.sidebarLink} onClick={() => setOpen(false)}>Pricing</Link>
        <Link to="/contact" style={styles.sidebarLink} onClick={() => setOpen(false)}>Contact</Link>

        <Link to="/login" style={styles.sidebarSignIn} onClick={() => setOpen(false)}>
          Sign In
        </Link>

        <Link to="/register" style={styles.sidebarBtn} onClick={() => setOpen(false)}>
          Try for Free
        </Link>
      </div>

      {/* MEDIA QUERY */}
      <style>
        {`
          /* Hide desktop links on small screens */
          @media (max-width: 768px) {
            .desktop {
              display: none !important;
            }

            /* Show menu icon only on small screens */
            .menu-icon {
              display: block;
              font-size: 26px;
              cursor: pointer;
            }
          }

          /* Hide menu icon on large screens */
          @media (min-width: 769px) {
            .menu-icon {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    background: "#fff",
    boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
    position: "relative",
    zIndex: 10,
  },
  logoLink: {
    textDecoration: "none",
    color: "inherit",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "22px",
    fontWeight: "700",
    color: "#111",
  },
  logoCircle: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#6c63ff,#a855f7)",
  },
  centerLinks: {
    listStyle: "none",
    display: "flex",
    gap: "32px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#444",
    fontSize: "15px",
    fontWeight: "500",
  },
  right: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  signIn: {
    textDecoration: "none",
    color: "#444",
    fontSize: "15px",
  },
  tryBtn: {
    textDecoration: "none",
    background: "#111",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "260px",
    height: "100vh",
    background: "#fff",
    boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
    padding: "80px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    transition: "0.3s ease",
    zIndex: 5,
  },
  sidebarLink: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    color: "#111",
  },
  sidebarSignIn: {
    textDecoration: "none",
    fontSize: "15px",
    color: "#444",
    marginTop: "20px",
  },
  sidebarBtn: {
    marginTop: "10px",
    textDecoration: "none",
    background: "#111",
    color: "#fff",
    padding: "12px",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "600",
  },
};

export default Navbar;
