import React, { useState, useCallback } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import PromoSection from '../components/PromoSection';
import AboutSection from '../components/AboutSection';
import MilestonesSection from '../components/MilestonesSection';
import FAQSection from '../components/FAQSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
    const [showNav, setShowNav] = useState(false);

    const handleAnimationComplete = useCallback(() => {
        setShowNav(true);
    }, []);

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <NavBar show={showNav} />
            <Hero onAnimationComplete={handleAnimationComplete} />
            <PromoSection />
            <AboutSection />
            <MilestonesSection />
            <FAQSection />
            <FooterSection />
        </div>
    );
};

export default Home;
