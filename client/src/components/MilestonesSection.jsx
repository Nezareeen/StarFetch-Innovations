import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './MilestonesSection.module.scss';

// Import Images
import collectorImg from '../assets/milestones/Kakinada district collector.png';
import lokeshImg from '../assets/milestones/Met Nara Lokesh.png';

gsap.registerPlugin(ScrollTrigger);

const milestonesData = [
    {
        id: 1,
        title: "Mr. Shan Mohan Sagili Sir",
        subtitle: "KAKINADA DISTRICT COLLECTOR",
        description: "Connecting students and educators through a new innovation-driven platform, launched by our esteemed Collector.",
        image: collectorImg
    },
    {
        id: 2,
        title: "Shri Nara Lokesh",
        subtitle: "HON'BLE MINISTER FOR IT, E&C",
        description: "Discussing the future of technical education and skills development with the Hon'ble Minister for Information Technology, Electronics & Communications.",
        image: lokeshImg
    }
];

const MilestonesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < milestonesData.length - 1) {
            animateTextChange(() => setCurrentIndex(prev => prev + 1));
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            animateTextChange(() => setCurrentIndex(prev => prev - 1));
        }
    };

    const animateTextChange = (updateStateCallback) => {
        // Fade out current text
        gsap.to(textRef.current, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            onComplete: () => {
                updateStateCallback();
                // Fade in new text
                gsap.to(textRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const activeMilestone = milestonesData[currentIndex];

    return (
        <section className={styles.milestonesSection} ref={sectionRef}>
            <div className={styles.container}>
                {/* Header row */}
                <div className={styles.headerRow}>
                    <h2 className={styles.title}>Milestones and accomplishments</h2>
                    <p className={styles.subtitle}>
                        Innovating beyond limits to shape a futuristic world of possibilities. 
                        We always intend to add curiosity to our knowledge to make it more powerful.
                    </p>
                </div>

                {/* Slider and Text area */}
                <div className={styles.contentArea}>
                    {/* Image Track Container */}
                    <div className={styles.sliderContainer}>
                        <div className={styles.imageTrack}>
                            {milestonesData.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className={`${styles.imageWrapper} ${index === currentIndex ? styles.active : ''}`}
                                    style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}vw))` }}
                                >
                                    <img src={item.image} alt={item.title} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Info area */}
                    <div className={styles.infoRow}>
                        <div className={styles.textContent} ref={textRef}>
                            <h3>{activeMilestone.title}</h3>
                            <span className={styles.designation}>{activeMilestone.subtitle}</span>
                            <p>{activeMilestone.description}</p>
                        </div>
                        
                        <div className={styles.controls}>
                            <button 
                                onClick={handlePrev} 
                                disabled={currentIndex === 0}
                                className={styles.arrowBtn}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <div className={styles.divider}></div>
                            <button 
                                onClick={handleNext} 
                                disabled={currentIndex === milestonesData.length - 1}
                                className={styles.arrowBtn}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MilestonesSection;
