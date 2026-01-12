import React from 'react';
import './Collaborators.css';

const Collaborators = () => {
  // Placeholder for collaborator logos - replace with actual image paths
  const collaborators = [
    { id: 1, name: 'PMR Vidya Mandir', logo: '/collaborators/pmr-vidya-mandir.png' },
    { id: 2, name: 'Lakshmi', logo: '/collaborators/lakshmi.png' },
    { id: 3, name: 'Greenwood', logo: '/collaborators/greenwood.png' },
    { id: 4, name: 'Collaborator 4', logo: '/collaborators/collab-4.png' },
    { id: 5, name: 'Collaborator 5', logo: '/collaborators/collab-5.png' },
    { id: 6, name: 'Collaborator 6', logo: '/collaborators/collab-6.png' }
  ];

  return (
    <section id="collaborators" className="collaborators-section">
      <div className="collaborators-container">
        <h2 className="section-title collaborators-title">STARFETCH INNOVATIONS COLLABORATORS</h2>
        <div className="collaborators-grid">
          {collaborators.map((collaborator) => (
            <div key={collaborator.id} className="collaborator-item">
              <img 
                src={collaborator.logo} 
                alt={collaborator.name}
                className="collaborator-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
