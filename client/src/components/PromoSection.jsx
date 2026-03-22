import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PromoSection.module.scss';
import promoVideo from '../assets/vid/SFI Icon Vid HD.mp4';
import logo1 from '../assets/partner logos/1.png';
import logo2 from '../assets/partner logos/2.png';
import logo3 from '../assets/partner logos/3.png';
import logo4 from '../assets/partner logos/4.png';
import logo5 from '../assets/partner logos/5.png';
import logo6 from '../assets/partner logos/6.png';
import logo7 from '../assets/partner logos/7.png';
import logo8 from '../assets/partner logos/8.png';
import logo9 from '../assets/partner logos/9.png';
import logo10 from '../assets/partner logos/10.png';
import logo11 from '../assets/partner logos/11.png';
import logo12 from '../assets/partner logos/12.png';
import logo13 from '../assets/partner logos/13.png';

gsap.registerPlugin(ScrollTrigger);

const PromoSection = () => {
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);

    const sponsors = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13
    ];

    // We need to duplicate the list to create a seamless infinite scroll effect
    const marqueeSponsors = [...sponsors, ...sponsors];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(videoContainerRef.current,
                {
                    opacity: 0,
                    y: 100, // Starts 100px below
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: videoContainerRef.current,
                        start: "top 80%", // Animates when top of video hits 80% down the viewport
                        toggleActions: "play none none reverse", // Optional: remove reverse if you only want it once
                        onEnter: () => {
                            if (videoRef.current) {
                                videoRef.current.play().catch(error => {
                                    console.log("Autoplay prevented:", error);
                                });
                            }
                        }
                    }
                }
            );

        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.promoSection}>
            {/* Video Player Mock -> Actual Video element */}
            <div className={styles.videoContainer} ref={videoContainerRef}>
                <video
                    ref={videoRef}
                    className={styles.videoPlayer}
                    src={promoVideo}
                    muted
                    loop
                    playsInline
                // autoPlay handled by ScrollTrigger
                />
            </div>

            {/* Continuous Sponsor Ribbon */}
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    {marqueeSponsors.map((sponsorLogo, index) => (
                        <div key={index} className={styles.sponsorLogo}>
                            <img src={sponsorLogo} alt={`Partner Logo ${index + 1}`} className={styles.sponsorImage} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
