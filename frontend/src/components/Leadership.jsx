import React from 'react';
import './Leadership.css';

const Leadership = () => {
  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <div className="leadership-content">
          <div className="leadership-image-container">
            {/* Placeholder for image - replace src with actual image path */}
            <img 
              src="/placeholder-leadership.jpg" 
              alt="Mr. Shan Mohan Sagili Sir"
              className="leadership-image"
            />
          </div>
          <div className="leadership-info">
            <h3 className="leadership-name">Mr. Shan Mohan Sagili Sir</h3>
            <p className="leadership-title">DIRECTOR & FOUNDER</p>
            <div className="leadership-description">
              <p>
                With a visionary approach to education and technology, Mr. Shan Mohan Sagili Sir 
                has been instrumental in shaping Starfetch Innovations into a leading organization 
                in futuristic education. His passion for empowering young minds and fostering innovation 
                drives our mission forward.
              </p>
              <p>
                Under his leadership, Starfetch Innovations has successfully established numerous 
                ATL and SIT Labs, impacting thousands of students across the region. His commitment 
                to bridging the gap between traditional education and cutting-edge technology has 
                created opportunities for countless young innovators.
              </p>
              <p className="leadership-tagline">
                <span className="tagline-highlight">Empowering Connections, Inspiring Change.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
