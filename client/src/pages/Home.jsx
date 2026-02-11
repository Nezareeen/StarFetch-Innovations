import React, { useState, useCallback } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Home = () => {
    const [showNav, setShowNav] = useState(false);

    const handleAnimationComplete = useCallback(() => {
        setShowNav(true);
    }, []);

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <NavBar show={showNav} />
            <Hero onAnimationComplete={handleAnimationComplete} />
        </div>
    );
};

export default Home;
