import { useState, useEffect, useRef } from 'react';

export const useMouse = () => {
  const [mouseState, setMouseState] = useState({ x: null, y: null });
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMouseState({
          x: e.clientX,
          y: e.clientY,
        });
      } else {
        setMouseState({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [mouseState, ref];
};
