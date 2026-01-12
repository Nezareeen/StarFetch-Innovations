import React, { useState } from 'react';
import './MonsterSeries.css';

const MonsterSeries = () => {
  const [activeLevel, setActiveLevel] = useState(1);

  const levels = [
    {
      level: 1,
      title: 'LEVEL-1',
      features: ['Robo Makers', 'Augmented Reality', '3D Printing & Design', 'Robotics Basics'],
      images: ['/placeholder-level1-1.jpg', '/placeholder-level1-2.jpg']
    },
    {
      level: 2,
      title: 'LEVEL-2',
      features: ['Advanced Robotics', 'AI Fundamentals', 'IoT Integration', 'Sensor Programming'],
      images: ['/placeholder-level2-1.jpg', '/placeholder-level2-2.jpg']
    },
    {
      level: 3,
      title: 'LEVEL-3',
      features: ['Machine Learning', 'Advanced 3D Design', 'Robotic Systems', 'Project Development'],
      images: ['/placeholder-level3-1.jpg', '/placeholder-level3-2.jpg']
    },
    {
      level: 4,
      title: 'LEVEL-4',
      features: ['Expert Projects', 'Industry Applications', 'Research & Innovation', 'Mentorship'],
      images: ['/placeholder-level4-1.jpg', '/placeholder-level4-2.jpg']
    }
  ];

  const currentLevel = levels.find(l => l.level === activeLevel) || levels[0];

  return (
    <section id="monster-series" className="monster-series-section">
      <div className="monster-series-container">
        <h2 className="section-title">MONSTER SERIES</h2>
        <div className="monster-series-content">
          <div className="monster-series-images">
            {currentLevel.images.map((img, index) => (
              <div key={index} className="monster-image-container">
                <img 
                  src={img} 
                  alt={`${currentLevel.title} - Image ${index + 1}`}
                  className="monster-image"
                />
              </div>
            ))}
          </div>
          <div className="monster-series-info">
            <h3 className="monster-level-title">{currentLevel.title}</h3>
            <ul className="monster-features">
              {currentLevel.features.map((feature, index) => (
                <li key={index} className="monster-feature">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="monster-series-navigation">
          <button 
            className="nav-arrow nav-arrow-left"
            onClick={() => setActiveLevel(prev => prev > 1 ? prev - 1 : 4)}
          >
            ←
          </button>
          <div className="level-indicators">
            {levels.map((level) => (
              <button
                key={level.level}
                className={`level-indicator ${activeLevel === level.level ? 'active' : ''}`}
                onClick={() => setActiveLevel(level.level)}
              >
                {level.title}
              </button>
            ))}
          </div>
          <button 
            className="nav-arrow nav-arrow-right"
            onClick={() => setActiveLevel(prev => prev < 4 ? prev + 1 : 1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonsterSeries;
