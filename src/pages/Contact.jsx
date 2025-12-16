import React from "react";
import "./Contact.css";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";
import FAQ from "./FAQ";

const Contact = () => {
  return (
    <>
      {/* ================= CONTACT INFO SECTION ================= */}
      <section className="contact-section">
        <div className="contact-container">

          <span className="contact-badge">Contact Us</span>

          <h2 className="contact-title">Contact Our Team</h2>

          <p className="contact-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus. Nullam congue blandit quam, sit amet.
          </p>

          <div className="contact-points">
            <span>✔ Lorem ipsum dolor sit amet.</span>
            <span>✔ Lorem ipsum dolor sit amet.</span>
            <span>✔ Lorem ipsum dolor sit amet.</span>
          </div>

          <div className="contact-cards">

            <div className="contact-card">
              <div className="contact-icon blue">
                <MdEmail />
              </div>
              <h4>Message Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="contact-info">sanfrancisco@oteka.co</span>
            </div>

            <div className="contact-card">
              <div className="contact-icon purple">
                <MdCall />
              </div>
              <h4>Call Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="contact-info">(01) 000 123 44+</span>
            </div>

            <div className="contact-card">
              <div className="contact-icon orange">
                <MdLocationOn />
              </div>
              <h4>Address</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="contact-info">Sydney, Australia, 2000</span>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="contact-form-section">
        <div className="contact-form-container">

          <span className="form-badge">Contact Us</span>

          <h2 className="form-title">Leave our team a message.</h2>

          <p className="form-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus non enim lacus. Nullam congue blandit quam.
          </p>

          <form className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John" />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Smith" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="business@mail.com" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="+1 234 567 89 00" />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Online Shopping Business" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message here..." />
            </div>

            <div className="form-check">
              <input type="checkbox" />
              <span>I Agree to the Privacy Policy</span>
            </div>

            <button className="form-btn">Send Message</button>

          </form>
        </div>
      </section>



      <section className="pricing-wrapper">
      {/* pricing ka baaki code yahin rahega */}

      <FAQ />
    </section>
    </>
  );
};

export default Contact;
