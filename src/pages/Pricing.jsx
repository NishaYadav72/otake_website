import React from "react";
import "./Pricing.css";
import FAQ from "./FAQ";

const Pricing = () => {
  return (
    <>
      {/* ================= PRICING HERO ================= */}
      <section className="pricing-hero">
        <div className="pricing-container">

          {/* badge */}
          <span className="pricing-badge">Pricing Plans</span>

          {/* heading */}
          <h1 className="pricing-title">
            Pricing To Suit All <br /> Business Sizes
          </h1>

          {/* description */}
          <p className="pricing-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Vivamus non enim lacus. Nullam congue blandit quam,
            sit amet scelerisque.
          </p>

        </div>
      </section>

      {/* ================= PLAN SECTION ================= */}
      <section className="plan-section">
        <div className="plan-container">

          {/* Toggle */}
          <div className="plan-toggle">
            <button className="active">Monthly</button>
            <button>Yearly 20% off</button>
          </div>

          <div className="plan-card">

            {/* Top Dark Bar */}
            <div className="plan-top">
              <div>
                <p className="plan-name">Yearly Plan</p>
                <h2 className="plan-price">
                  18<span>/mo</span>
                </h2>
              </div>

              <p className="plan-desc">
                The starter plan that helps you get organised
                across all our products and features.
              </p>

              <span className="plan-discount">Discounted</span>
            </div>

            {/* Bottom Content */}
            <div className="plan-content">

              {/* Left */}
              <div className="plan-left">
                <ul>
                  <li>One User</li>
                  <li>Unlimited Viewers</li>
                  <li>Basic Insights</li>
                  <li>Integrations with All Systems</li>
                  <li className="disabled">Advanced Analytics</li>
                </ul>

                <div className="plan-brand">
                  <h3>dokey.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus non enim lacus.
                  </p>

                  <div className="plan-user">
                    <div>
                      <strong>John Smith</strong>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="plan-right">
                <h4>Standard</h4>
                <p>Lorem ipsum dolor sit amet.</p>

                <form>
                  <input type="text" placeholder="Full Name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Company Name" />
                  <input type="tel" placeholder="Contact Number" />
                  <button type="submit">Apply Now</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>




     
    <section className="features-section">
      <p className="features-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />Vivamus non enim lacus.
      </p>

      <div className="features-cards">
        <div className="feature-card">
          <div className="feature-icon">☁️</div>
          <h3>Client Focussed</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🧩</div>
          <h3>Innovate & Optimize</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Community Driven</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus.
          </p>
        </div>
      </div>

      <h4 className="trusted-title">
        Trusted by technical teams at companies of all sizes
      </h4>

      <div className="trusted-logos">
        <span>Cyrus</span>
        <span>Jambo</span>
        <span>Kadu</span>
        <span>Vario</span>
        <span>Aspect</span>
      </div>

      <p className="trusted-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
        lorem quis lectus molestie.
      </p>

      <button className="cta-btn">Start your Otake journey</button>
    </section>
  




    <section className="product-section">
      <div className="product-container">
        {/* Left Content */}
        <div className="product-left">
          <span className="badge">Product Features</span>

          <h1 className="title">
            Create a product.<br />
            <span>It's easy with Otake.</span>
          </h1>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus. Nullam congue blandit quam, sit
            amet scelerisque turpis pellentesque eu.
          </p>

          <button className="contact-btn">Contact Us</button>

          <ul className="feature-list">
            <li>Register users in seconds</li>
            <li>Collect authorization via secure portal</li>
          </ul>
        </div>

        {/* Right Mockup */}
        <div className="product-right">
          <div className="mockup">
            <div className="browser-bar">otake.com</div>

            <h2 className="mockup-title">Otake</h2>
            <p className="mockup-sub">500+ Experience</p>

            <div className="tags">
              <span>Designer</span>
              <span>Flowbase</span>
              <span>John</span>
            </div>

            <div className="info-box">
              <h4>Enhanced User Experience</h4>
              <p>Intuitive interface for seamless navigation and interaction.</p>
            </div>

            <div className="info-box">
              <h4>Customization Options</h4>
              <p>User-controlled settings for person.</p>
            </div>

            <p className="footer-text">Redefining UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  

<section className="getstarted-section">
      <div className="getstarted-box">

        <h2 className="getstarted-title">
          Get Started with Otake
        </h2>

        <p className="getstarted-desc">
          Explore a new realm of efficiency and success with our cutting-edge SaaS.
        </p>

        <div className="getstarted-stats">
          <div className="stat-item">
            <h3>120</h3>
            <span>Employees</span>
          </div>

          <div className="stat-item">
            <h3>$31.5M</h3>
            <span>Raised</span>
          </div>

          <div className="stat-item">
            <h3>7</h3>
            <span>Years Old</span>
          </div>
        </div>

        <button className="getstarted-btn">
          Apply Now - Otake Template
        </button>

      </div>
    </section>


 (
    
 <section className="pricing-wrapper">
      {/* pricing ka baaki code yahin rahega */}

      <FAQ />
    </section>



    </>
  );
};




export default Pricing;
