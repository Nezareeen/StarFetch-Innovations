import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.scss';
import icon from '/icon SFI.svg'

const NavBar = ({ show }) => {
    const navRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

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
                <Link to="/" className={styles.logoContainer} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className={styles.logoIcon}><img src={icon} alt="icon" height={55} className={styles.actualIcon}/></div>
                    <div className={styles.brandName}>StarFetch Innovations</div>
                </Link>
                
                <div className={styles.desktopGroup}>
                    <ul className={styles.navLinks}>
                        <li>{isHome ? <a href="#about">About</a> : <Link to="/">About</Link>}</li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li>{isHome ? <a href="#courses">Courses</a> : <Link to="/">Courses</Link>}</li>
                        <li>{isHome ? <a href="#more" className={styles.moreLink}>More <span>v</span></a> : <Link to="/">More <span>v</span></Link>}</li>
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
                    <li>{isHome ? <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a> : <Link to="/" onClick={() => setIsMenuOpen(false)}>About</Link>}</li>
                    <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
                    <li>{isHome ? <a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a> : <Link to="/" onClick={() => setIsMenuOpen(false)}>Courses</Link>}</li>
                    <li>{isHome ? <a href="#more" onClick={() => setIsMenuOpen(false)}>More</a> : <Link to="/" onClick={() => setIsMenuOpen(false)}>More</Link>}</li>
                    <li>{isHome ? <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a> : <Link to="/" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>}</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
