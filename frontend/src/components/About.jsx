import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-quote">
          "We always intend to add curiosity to our Knowledge to make it more Powerful."
        </div>
        <h2 className="section-title">ABOUT US</h2>
        <div className="about-content">
          <p className="about-text">
            Starfetch Innovations is a pioneering organization dedicated to revolutionizing 
            education through futuristic technology and innovative learning methodologies. 
            Our mission is to empower young minds with the skills, knowledge, and creativity 
            needed to thrive in an ever-evolving technological landscape.
          </p>
          <p className="about-text">
            We believe in fostering hands-on learning experiences that bridge the gap between 
            theoretical knowledge and practical application. Through our comprehensive programs, 
            workshops, and state-of-the-art facilities, we inspire students to explore, innovate, 
            and create solutions for tomorrow's challenges.
          </p>
          <p className="about-text">
            Our commitment extends beyond education—we aim to create a positive impact on society 
            by nurturing the next generation of innovators, thinkers, and problem-solvers who will 
            shape the future of technology and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
