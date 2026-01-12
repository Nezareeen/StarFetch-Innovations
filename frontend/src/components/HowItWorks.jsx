import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: '🤝',
      title: 'Approach The Management',
      step: 1
    },
    {
      icon: '📝',
      title: 'Finalizing The Deal',
      step: 2
    },
    {
      icon: '✅',
      title: 'Confirming The Collaboration',
      step: 3
    },
    {
      icon: '🔬',
      title: 'Establishing The Lab',
      step: 4
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <h2 className="section-title">HOW DO STARFETCH INNOVATIONS WORK</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.step} className="step-card">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
