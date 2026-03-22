import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.scss';
import icon from '/icon SFI.svg'

const Hero = ({ onAnimationComplete }) => {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    const logoRef = useRef(null);
    const buttonRef = useRef(null);

    const textLines = [
        "Designed to reach the",
        "futuristic world"
    ];

    // Split text helper
    const splitText = (text) => {
        return text.split("").map((char, index) => (
            <span key={index} className={styles.char}>
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleChars = document.querySelectorAll(`.${styles.title} h1 .${styles.line} .${styles.char}`);

            // Set initial state for secondary elements
            gsap.set([logoRef.current, buttonRef.current], { opacity: 0, y: 20 });

            // Ensure we clean up old timeline if it exists
            if (timelineRef.current) {
                timelineRef.current.kill();
            }

            const tl = gsap.timeline({
                onComplete: () => {
                    if (onAnimationComplete) onAnimationComplete();
                }
            });
            timelineRef.current = tl;

            // 1. Text Animation (Effect 2)
            tl.fromTo(
                titleChars,
                {
                    willChange: "opacity",
                    opacity: 0,
                    filter: "blur(20px)"
                },
                {
                    ease: "power2.inOut",
                    opacity: 1,
                    filter: "blur(0px)",
                    stagger: {
                        each: 0.05,
                        from: "random"
                    },
                    duration: 1 // Explicit duration helpful for timing
                }
            );

            // 2. Animate Logo and Button AFTER text
            tl.to([logoRef.current, buttonRef.current], {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2
            });

        }, containerRef);

        return () => ctx.revert();
    }, [onAnimationComplete]);

    return (
        <section className={styles.heroSection} ref={containerRef}>
            <div className={styles.centerContent}>
                <div className={styles.smallLogoContainer} ref={logoRef}>
                    {/* Replace with actual small logo if available */}
                    <span className={styles.logoIcon}><img src={icon} alt="icon" height={65}/></span>
                    <span className={styles.logoText}>StarFetch Innovations</span>
                </div>

                <div className={styles.title}>
                    <h1>
                        {textLines.map((line, i) => (
                            <span key={i} className={styles.line}>
                                {splitText(line)}
                                <span className={styles.after}></span>
                            </span>
                        ))}
                    </h1>
                </div>

                <button 
                    className={styles.exploreButton} 
                    ref={buttonRef}
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore
                </button>
            </div>
        </section>
    );
};

export default Hero;
