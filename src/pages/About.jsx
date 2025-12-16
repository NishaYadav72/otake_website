import React from "react";
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import About3 from "../assets/images/about3.png";
import "./About.css";
import blog3 from "../assets/images/blog3.png"; // 👈 image import

const About = () => {
  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section">
        <div className="about-header">
          <h1>About Us</h1>
        </div>

        <p className="about-subheading">
          Empowering businesses <br /> large and small
        </p>

        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus <br />
          non enim lacus. Nulla facilisi. Suspendisse potenti.
        </p>

        <div className="about-cards">
          <div className="about-card card1">
            <img src={About1} alt="About 1" />
          </div>

          <div className="about-card card2">
            <img src={About2} alt="About 2" />
          </div>

          <div className="about-card card3">
            <img src={About3} alt="About 3" />
          </div>
        </div>
      </section>



<section className="stats-section">
  <div className="stats-container">

    {/* Top Content */}
    <div className="stats-top">
      <div className="stats-left">
        <h2>
          The growth of your <br />
          business is our priority, so <br />
          we are here to help.
        </h2>
      </div>

      <div className="stats-right">
        <p>
          Euismod aliquet odio cursus lacus, ut sit
          suspendisse ultrices. Etiam enim risus faucibus
          feugiat ut enim in sed tincidunt. Eu in justo, eu
          porttitor vivamus neque.
        </p>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="stats-cards">
      <div className="stat-card">
        <span className="stat-title">CLIENT RETENTION</span>
        <h3>5.2M</h3>
      </div>

      <div className="stat-card">
        <span className="stat-title">EMAILS PER MONTH</span>
        <h3>+330K</h3>
      </div>

      <div className="stat-card">
        <span className="stat-title">MONTHLY CAMPAIGNS</span>
        <h3>+44,5K</h3>
      </div>
    </div>

  </div>
</section>


      {/* ===== VALUES SECTION ===== */}
      <section className="values-section">
        <div className="values-container">

          <div className="values-top">
            <div className="values-left">
              <span className="values-badge">Our Values</span>
              <h2>
                And these are <br /> our principles!
              </h2>
            </div>

            <div className="values-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus non enim lacus. Nullam congue blandit quam,
                sit amet scelerisque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="values-cards">
            <div className="value-card">
              <div className="value-icon pink">💗</div>
              <h3>Client Focussed</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus non enim lacus. Nullam congue blandit quam.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon orange">🍊</div>
              <h3>Innovate & Optimize</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus non enim lacus. Nullam congue blandit quam.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon purple">🕊️</div>
              <h3>Community Driven</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus non enim lacus. Nullam congue blandit quam.
              </p>
            </div>
          </div>

        </div>
      </section>



{/* ===== OUR STORY SECTION ===== */}
      <section className="story-section">
        <div className="story-container">

          {/* Top Center */}
          <div className="story-header">
            <span className="story-badge">Our Story</span>
            <h2>Our growth journey.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus non enim lacus. Nullam congue blandit quam,
              sit amet scelerisque turpis.
            </p>
          </div>

          {/* Content */}
          <div className="story-content">

            {/* Left Stats */}
            <div className="story-left">
              <div className="story-item">
                <h3>+100,000</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus non enim lacus.
                </p>
              </div>

              <div className="story-item">
                <h3>5 Minutes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus non enim lacus.
                </p>
              </div>

              <div className="story-item">
                <h3>20 Years</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus non enim lacus.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="story-right">
              <div className="story-image-box">
                <img src={blog3} alt="Our Growth Story" />
                <span className="story-badge-small">
                  +416k Reach Growth
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

 <section className="features-section">
      <div className="features-container">

        {/* Header */}
        <span className="features-badge">Product Features</span>
        <h2 className="features-title">Our Primary Features</h2>
        <p className="features-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus non enim lacus. Nullam congue blandit quam,
          sit amet scelerisque.
        </p>

        {/* Feature Cards */}
        <div className="features-cards">

          <div className="feature-card">
            <div className="feature-icon pink">🐚</div>
            <div className="feature-content">
              <h3>Business insurance</h3>
              <p>
                We keep our promises, provide upfront
                timelines and bring predictability.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue">🌿</div>
            <div className="feature-content">
              <h3>Home insurance</h3>
              <p>
                We keep our promises, provide upfront
                timelines and bring predictability.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon yellow">🪙</div>
            <div className="feature-content">
              <h3>Life insurance</h3>
              <p>
                We keep our promises, provide upfront
                timelines and bring predictability.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    
      {/* ===== STATS SECTION ===== */}


    </>
  );
};

export default About;
