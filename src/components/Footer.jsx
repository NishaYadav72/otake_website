import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Cards */}
        <div className="footer-top">

          <div className="footer-feature">
            <span className="icon orange">🧠</span>
            <h4>INNOVATION</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus non enim lacus.
            </p>
          </div>

          <div className="footer-feature">
            <span className="icon blue">☁️</span>
            <h4>CLOUD SECURE</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus non enim lacus.
            </p>
          </div>

          <div className="footer-feature">
            <span className="icon yellow">🚀</span>
            <h4>GROWTH DRIVEN</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus non enim lacus.
            </p>
          </div>

        </div>

        <hr />

        {/* Bottom Content */}
        <div className="footer-bottom">

          {/* Brand */}
          <div className="footer-brand">
            <h3>Otake™</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vivamus non enim lacus.
            </p>

            <div className="footer-social">
              <span>◎</span>
              <span>◎</span>
              <span>◎</span>
              <span>◎</span>
            </div>
          </div>

          {/* Pages */}
          <div className="footer-links">
            <h5>Pages</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>
                Contact <span className="new">NEW</span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-links">
            <h5>Solutions</h5>
            <ul>
              <li>Startup Support</li>
              <li>
                Growth AI <span className="new">NEW</span>
              </li>
              <li>Business Support</li>
              <li>Shipping</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links">
            <h5>Resources</h5>
            <ul>
              <li>Blog</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li>
                Monitoring <span className="new">NEW</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h5>Subscribe to our newsletter for updates</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="newsletter-box">
              <input type="email" placeholder="Enter your email" />
              <button>Get Started – It's free</button>
            </div>

            <small>30 Day Free Trial No Credit Card Required.</small>
          </div>

        </div>

        <hr />

        {/* Copyright */}
        <div className="footer-copy">
          © 2024 Otake Template. Built by Flowbase. Powered by Webflow.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
