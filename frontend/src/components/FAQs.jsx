import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Are your courses suitable for beginners?',
      answer: 'Yes, most of our courses are specifically designed for beginners with no prior technical experience. We believe in providing a strong foundation in fundamental concepts and hands-on learning, ensuring that everyone can start their journey from the basics.'
    },
    {
      question: 'What is included in The Robotic Kits?',
      answer: 'Our robotic kits include all necessary components such as microcontrollers, sensors, actuators, motors, wiring, and detailed instruction manuals. Each kit is carefully curated to provide a complete learning experience with step-by-step guides for assembly and programming.'
    },
    {
      question: 'Do You Offer Support For Kit assembly and Programming?',
      answer: 'Absolutely! We provide comprehensive support through multiple channels including video tutorials, detailed documentation, email support, and live workshops. Our team is always ready to help students overcome any challenges they encounter during kit assembly and programming.'
    },
    {
      question: 'Do You Offer Online Or In-Person Courses?',
      answer: 'We offer both online and in-person courses to accommodate different learning preferences and schedules. Our online courses include live sessions, recorded content, and interactive assignments, while in-person courses provide hands-on experience in our state-of-the-art labs.'
    },
    {
      question: 'Do I Need Any Prior Experience To Assemble The Kits?',
      answer: 'No prior experience is required! Our kits are designed for beginners and include comprehensive instructions with illustrations. We also provide video tutorials and support resources to guide you through every step of the assembly process.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs-section">
      <div className="faqs-container">
        <h2 className="section-title">FAQS</h2>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-q">Q:</span>
                <span className="faq-text">{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <span className="faq-a">A:</span>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
