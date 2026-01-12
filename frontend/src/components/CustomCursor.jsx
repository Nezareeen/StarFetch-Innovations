import React, { useState, useEffect } from 'react';
import { useMouse } from '../hooks/useMouse';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mouseState, ref] = useMouse();
  const [cursorContent, setCursorContent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check for buttons
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorContent('Click');
        return;
      }
      
      // Check for links
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorContent('Link');
        return;
      }
      
      // Check for interactive elements
      if (target.closest('.course-card, .service-card, .gallery-item, .step-card')) {
        setCursorContent('Explore');
        return;
      }
      
      setCursorContent(null);
    };

    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible || mouseState.x === null || mouseState.y === null) {
    return null;
  }

  return (
    <div ref={ref} className="custom-cursor-wrapper">
      <div
        className="custom-cursor"
        style={{
          left: mouseState.x,
          top: mouseState.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="cursor-dot" />
        {cursorContent && (
          <div className="cursor-content">
            {cursorContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
