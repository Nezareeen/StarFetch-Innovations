import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './NavBar.module.scss';
// import logo from '../assets/react.svg'; // Placeholder if needed

const NavBar = ({ show }) => {
    const navRef = useRef(null);

    useEffect(() => {
        if (show) {
            gsap.to(navRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            });
        }
    }, [show]);

    return (
        <nav className={styles.navBar} ref={navRef} style={{ opacity: 0, transform: 'translateY(-20px)' }}>
            <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>💡</div>
                <div className={styles.brandName}>StarFetch Innovations</div>
            </div>
            <ul className={styles.navLinks}>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#more" className={styles.moreLink}>More <span>v</span></a></li>
            </ul>
            <button className={styles.contactButton}>Contact Us</button>
        </nav>
    );
};

export default NavBar;
