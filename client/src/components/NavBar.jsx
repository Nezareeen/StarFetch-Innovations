import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './NavBar.module.scss';
import icon from '/icon SFI.svg'

const NavBar = ({ show }) => {
    const navRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Scroll listener for hiding/showing
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false); // scrolling down
                    setIsMenuOpen(false); // close menu
                } else {
                    setIsVisible(true);  // scrolling up
                }
            } else {
                setIsVisible(true); // Always show at the top
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav 
            className={`${styles.navBarWrapper} ${isVisible ? styles.navVisible : styles.navHidden} ${lastScrollY > 50 ? styles.navScrolled : ''}`}
            ref={navRef} 
            style={{ opacity: 0, transform: 'translateY(-20px)' }}
        >
            <div className={styles.navBar}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoIcon}><img src={icon} alt="icon" height={55} className={styles.actualIcon}/></div>
                    <div className={styles.brandName}>StarFetch Innovations</div>
                </div>
                
                <div className={styles.desktopGroup}>
                    <ul className={styles.navLinks}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#more" className={styles.moreLink}>More <span>v</span></a></li>
                    </ul>
                    <button className={styles.contactButton}>Contact Us</button>
                </div>

                {/* Mobile Hamburger Icon */}
                <div 
                    className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
                    <li><a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a></li>
                    <li><a href="#more" onClick={() => setIsMenuOpen(false)}>More</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
