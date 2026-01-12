import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'ALL' },
    { id: 'atl', label: 'ATL' },
    { id: 'sit-lab', label: 'SIT LAB' },
    { id: 'workshop', label: 'WORKSHOP' },
    { id: 'milestones', label: 'OUR MILESTONES' }
  ];

  // Placeholder images - replace with actual image paths
  const galleryImages = [
    { id: 1, category: 'atl', src: '/gallery/atl-1.jpg', alt: 'ATL Activity' },
    { id: 2, category: 'sit-lab', src: '/gallery/sit-1.jpg', alt: 'SIT Lab' },
    { id: 3, category: 'workshop', src: '/gallery/workshop-1.jpg', alt: 'Workshop' },
    { id: 4, category: 'milestones', src: '/gallery/milestone-1.jpg', alt: 'Milestone' },
    { id: 5, category: 'atl', src: '/gallery/atl-2.jpg', alt: 'ATL Activity' },
    { id: 6, category: 'sit-lab', src: '/gallery/sit-2.jpg', alt: 'SIT Lab' },
    { id: 7, category: 'workshop', src: '/gallery/workshop-2.jpg', alt: 'Workshop' },
    { id: 8, category: 'milestones', src: '/gallery/milestone-2.jpg', alt: 'Milestone' },
    { id: 9, category: 'atl', src: '/gallery/atl-3.jpg', alt: 'ATL Activity' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="section-title gallery-title">EXPLORE GALLERY</h2>
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`gallery-filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span className="gallery-category">{image.category.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
