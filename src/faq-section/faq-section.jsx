import "./faq-section.css";
import { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "When are the events?",
      answer:
        "Our events are scheduled on various dates throughout the year. Please check our website or social media pages for the latest event announcements.",
    },
    // Add other FAQs similarly
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-header">FAQs</h2>
      <p className="faq-subtext">
        Find answers to common questions about event schedules, locations, and
        the ordering process.
      </p>
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </button>
          <div
            className={`faq-answer ${activeIndex === index ? "active" : ""}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
      <div className="faq-contact-section">
        <p>Still have questions?</p>
        <button className="faq-contact-button">Contact</button>
      </div>
    </div>
  );
};

export default FaqSection;
