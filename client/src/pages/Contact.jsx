import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import FooterSection from '../components/FooterSection';
import styles from './Contact.module.scss';
import gsap from 'gsap';

const Contact = () => {
    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
        
        // Setup GSAP animations
        gsap.fromTo(`.${styles.header} h1`, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(`.${styles.contentSplit} > div`, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );
        gsap.fromTo(`.${styles.contactInfoRow}`, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
        );
    }, []);

    return (
        <div className={styles.contactPage}>
            <NavBar show={true} />
            
            <main className={styles.mainContent}>
                <div className={styles.header}>
                    <h1>Contact us</h1>
                </div>
                
                <div className={styles.contentSplit}>
                    <div className={styles.leftColumn}>
                        <div className={styles.address}>
                            <p>Andhra Pradesh, Kakinada</p>
                            <p className={styles.muted}>533003</p>
                        </div>
                        <div className={styles.hours}>
                            <p>Office hours</p>
                            <p className={styles.muted}>Monday - Saturday</p>
                            <p className={styles.muted}>10 AM - 5 PM</p>
                        </div>
                    </div>
                    
                    <div className={styles.rightColumn}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <label>Name (required)</label>
                                <div className={styles.row}>
                                    <div className={styles.col}>
                                        <label className={styles.subLabel}>First Name</label>
                                        <input type="text" required />
                                    </div>
                                    <div className={styles.col}>
                                        <label className={styles.subLabel}>Last Name</label>
                                        <input type="text" required />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Service</label>
                                <select>
                                    <option value=""></option>
                                    <option value="general">General Inquiry</option>
                                    <option value="design">Web Design</option>
                                    <option value="development">Web Development</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email (required)</label>
                                <input type="email" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Description</label>
                                <input type="text" />
                            </div>

                            <button type="submit" className={styles.submitBtn}>Submit</button>
                        </form>
                    </div>
                </div>
            </main>

            <div className={styles.contactInfoRow}>
                <div>info@Starfetchinnovations.com</div>
                <div>(+91) 99494 18094</div>
            </div>

            <FooterSection />
        </div>
    );
};

export default Contact;
