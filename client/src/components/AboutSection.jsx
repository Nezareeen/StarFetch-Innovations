import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutSection.module.scss';

// Import Images
import workshopsImg from '../assets/about section/workshops.png';
import atlImg from '../assets/about section/ATL.png';
import sitImg from '../assets/about section/SIT.png';
import hackathonsImg from '../assets/about section/hackathons.png';
import certsImg from '../assets/about section/certifications.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const introRef = useRef(null);
    const featuresRef = useRef([]);

    const featuresData = [
        {
            title: "SFI Workshops",
            desc: "Starfetch Innovations workshop offers introduction to basic's of robotics and hands on practical learning with provided component kits.",
            img: workshopsImg,
            reverse: false
        },
        {
            title: "ATL (Atal Tinkering Lab)",
            desc: "The ATL Lab provides a vibrant environment where students of government schools and colleges can explore new technologies, experiment with ideas, and develop innovative solutions through hands-on projects.",
            img: atlImg,
            reverse: true
        },
        {
            title: "SIT Labs (Skill Innovation Technology Labs)",
            desc: "SIT Labs are equipped with state-of-the-art technology and resources, enabling students from schools and colleges to engage in advanced research and development in various fields.",
            img: sitImg,
            reverse: false
        },
        {
            title: "Hackathons and Innovation events",
            desc: "Starfetch Innovations organize Innovative and fun hackathons and events for students to showcase their skills, creativity and upskill their portfolio's.",
            img: hackathonsImg,
            reverse: true
        },
        {
            title: "Courses and Certifications",
            desc: "Starfetch Innovations offers a vast variety of courses for students to learn and get certified, certifications and courses ranging from 3D-printing, web dev to training for competitive robotics.",
            img: certsImg,
            reverse: false
        }
    ];

    const addToFeaturesRef = (el) => {
        if (el && !featuresRef.current.includes(el)) {
            featuresRef.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Text Animation
            gsap.fromTo(introRef.current, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: introRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Features Animation
            featuresRef.current.forEach((feature, index) => {
                const isReverse = featuresData[index].reverse;
                gsap.fromTo(feature,
                    { 
                        opacity: 0, 
                        x: isReverse ? -50 : 50,
                        y: 30
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: feature,
                            start: "top 80%",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [featuresData]);

    return (
        <section id="about" className={styles.aboutSection} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.intro} ref={introRef}>
                    <h2>
                        Starfetch Innovations is our futuristic learning ecosystem, bridging the<br />
                        gap between theory and impact to forge<br />
                        the next generation of tech pioneers.
                    </h2>
                </div>

                <div className={styles.features}>
                    {featuresData.map((feature, index) => (
                        <div 
                            key={index} 
                            ref={addToFeaturesRef}
                            className={`${styles.featureBlock} ${feature.reverse ? styles.reverse : ''}`}
                        >
                            <div className={styles.textContent}>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                            <div className={styles.imageContent}>
                                <img src={feature.img} alt={feature.title} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.btnContainer}>
                    <button className={styles.exploreBtn}>Explore Gallery</button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
