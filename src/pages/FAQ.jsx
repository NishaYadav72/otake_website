import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  "What is Otake and how can it benefit my startup?",
  "Is Otake suitable for all types of startups, regardless of industry size?",
  "How do I begin using Otake to develop my startup business effectively?"
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">

        <span className="faq-badge">Frequently Asked Questions</span>

        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>

        <p className="faq-subtitle">
          All Plans come with a 14-day free trial period.
        </p>

        <div className="faq-tabs">
          <button className="active">⌘ Getting Started</button>
          <button>⚙ Features and Support</button>
          <button>🔒 Security and Privacy</button>
          <button>✨ Otake Assistance</button>
        </div>

        <div className="faq-list">
          <h4>Getting Started:</h4>

          {faqData.map((q, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <div className="faq-question">
                <span>{q}</span>
                <span>⌄</span>
              </div>

              {openIndex === index && (
                <p className="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus non enim lacus.
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
