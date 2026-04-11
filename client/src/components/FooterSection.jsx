import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FooterSection.module.scss';
import iconSvg from '/icon-sfi.svg';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(footerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%" // Fades in when scrolling past FAQ
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer className={styles.footerSection} ref={footerRef}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.topRow}>
                    <p className={styles.reachText}>Reach the future</p>
                </div>

                {/* Main Middle Section */}
                <div className={styles.mainRow}>
                    <div className={styles.logoArea}>
                        <div className={styles.brandTitle}>
                            <div className={styles.titleLineOne}>
                                <span>StarFetch</span>
                                <img src={iconSvg} alt="SFI Icon" className={styles.lightbulbIcon} />
                            </div>
                            <div className={styles.titleLineTwo}>
                                <span>Innovations</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socialArea}>
                        <h4>Social</h4>
                        <ul className={styles.socialList}>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Youtube</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottomRow}>
                    <div className={styles.legalLinks}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <span className={styles.copyright}>&copy; 2026 All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
