import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavBar from '../components/NavBar';
import FooterSection from '../components/FooterSection';
import styles from './Gallery.module.scss';

gsap.registerPlugin(ScrollTrigger);

// Load images using Vite's import.meta.glob
const sitImagesRaw = import.meta.glob('../assets/SIT/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });
const sitImages = Object.values(sitImagesRaw);

const atlImagesRaw = import.meta.glob('../assets/ATL/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });
const atlImages = Object.values(atlImagesRaw);

const workshopImagesRaw = import.meta.glob('../assets/WORKSHOP/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });
const workshopImages = Object.values(workshopImagesRaw);

const GallerySlider = ({ title, images, index, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.1,
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
        <section className={styles.sliderSection} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.headerRow}>
                    <h2 className={styles.title}>{title}</h2>
                </div>

                <div className={styles.contentArea}>
                    <div className={styles.sliderContainer}>
                        <div className={styles.imageTrack}>
                            {images.map((src, i) => (
                                <div 
                                    key={i} 
                                    className={`${styles.imageWrapper} ${i === currentIndex ? styles.active : ''}`}
                                    style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 2}vw))` }}
                                    onClick={() => onImageClick(src)}
                                >
                                    <img src={src} alt={`${title} ${i + 1}`} loading="lazy" style={{ cursor: 'pointer' }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.infoRow}>
                        <div className={styles.textContent}>
                            <h3>{title} Image {currentIndex + 1} of {images.length}</h3>
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
                                disabled={currentIndex === images.length - 1}
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

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedImage]);

    return (
        <div className={styles.galleryPage}>
            <NavBar show={true} />
            
            {selectedImage && (
                <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>&times;</button>
                        <img src={selectedImage} alt="Fullscreen" />
                    </div>
                </div>
            )}
            
            <div className={styles.headerSection}>
                <h1>Our Gallery</h1>
                <p>Explore the moments we've captured throughout our journey at SIT, ATL, and WORKSHOPs.</p>
            </div>

            <div className={styles.slidersWrapper}>
                <GallerySlider title="SIT" images={sitImages} index={0} onImageClick={setSelectedImage} />
                <GallerySlider title="ATL" images={atlImages} index={1} onImageClick={setSelectedImage} />
                <GallerySlider title="WORKSHOP" images={workshopImages} index={2} onImageClick={setSelectedImage} />
            </div>

            <FooterSection />
        </div>
    );
};

export default Gallery;
