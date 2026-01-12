import React from 'react';
import { useTheme } from '../context/ThemeContext';
import DelicateAsciiDots from './DelicateAsciiDots';
import './Hero.css';

const Hero = () => {
  const { isLightMode } = useTheme();

  return (
    <section id="home" className="hero-section">
      <DelicateAsciiDots
        backgroundColor={isLightMode ? "#ffffff" : "#000000"}
        textColor={isLightMode ? "0, 0, 0" : "255, 215, 0"}
        gridSize={80}
        removeWaveLine={true}
        animationSpeed={0.75}
      />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            STARFETCH INNOVATIONS DESIGNED TO REACH THE FUTURISTIC WORLD
          </h1>
          <p className="hero-subtitle">
            Empowering young minds to innovate and create a futuristic world of possibilities.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">55+</span>
              <span className="stat-label">PROJECTS</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">STUDENTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
