import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FAQSection.module.scss';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
    {
        question: "Are your courses suitable for beginners?",
        answer: "Yes, our courses are designed to accommodate all skill levels, from complete beginners to advanced learners."
    },
    {
        question: "What is included in the robotic kits?",
        answer: "Our kits include microcontrollers, motors, sensors, structural components, and all necessary wiring to build your first robot."
    },
    {
        question: "Do you offer support for kit assembly and programming?",
        answer: "Yes! We offer comprehensive support, including:\nOnline tutorials and videos\nEmail and phone support and In person workshops."
    },
    {
        question: "Do you offer online or in-person courses?",
        answer: "We offer both! You can join our interactive online sessions or attend in-person workshops at select locations."
    },
    {
        question: "Do I need any prior experience to assemble the kits?",
        answer: "No prior experience is necessary. Our kits come with step-by-step instructions designed to guide you through the assembly process."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const sectionRef = useRef(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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
                        start: "top 80%"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.faqSection} ref={sectionRef}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently asked questions</h2>

                <div className={styles.faqList}>
                    {faqData.map((faq, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className={styles.questionRow}>
                                    <h3 className={styles.question}>{faq.question}</h3>
                                    <span className={`${styles.caret} ${isActive ? styles.caretActive : ''}`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </div>
                                
                                <div 
                                    className={`${styles.answerWrapper} ${isActive ? styles.open : ''}`}
                                    style={{ maxHeight: isActive ? '200px' : '0px' }}
                                >
                                    <div className={styles.answerContent}>
                                        {faq.answer.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                {i < faq.answer.split('\n').length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
