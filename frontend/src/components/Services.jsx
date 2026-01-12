import React from 'react';
import './Services.css';
import workshop from '../assets/svgs/scissors-svgrepo-com.svg'
import course from '../assets/svgs/briefcase-svgrepo-com.svg'
import atl from '../assets/svgs/compass-ruler-svgrepo-com.svg'
import sit from '../assets/svgs/monitor-svgrepo-com.svg'
import diy from '../assets/svgs/pencil-sharpener-svgrepo-com.svg'
import syllabus from '../assets/svgs/folder-svgrepo-com.svg'

const Services = () => {
  const services = [
    {
      icon: <img src={workshop} alt="workshop" width={100} height={100} />,
      title: 'Workshops',
      description: 'Our workshops are designed to foster hands-on learning, to help students understand complex concepts through practical experience and collaborative activities.'
    },
    {
      icon: <img src={course} alt="course" width={100} height={100} />,
      title: 'Courses',
      description: 'We offer a wide range of courses, including robotics, AI, IoT, 3D printing, and coding, designed to help students develop essential skills for the future.'
    },
    {
      icon: <img src={atl} alt="atl" width={100} height={100} />,
      title: 'ATL (Atal Tinkering Lab)',
      description: 'The ATL Lab provides a vibrant environment where students can explore new technologies, experiment with ideas, and develop innovative solutions through hands-on projects.'
    },
    {
      icon: <img src={sit} alt="sit" width={100} height={100} />,
      title: 'SIT Labs (Skill Innovation & Technology Labs)',
      description: 'SIT Labs are equipped with state-of-the-art technology and resources, enabling students to engage in advanced research and development in various fields.'
    },
    {
      icon: <img src={diy} alt="diy" width={100} height={100} />,
      title: 'DIY Kits',
      description: 'We provide DIY kits that allow students to build and experiment with various projects at home, fostering creativity and problem-solving skills.'
    },
    {
      icon: <img src={syllabus} alt="syllabus" width={100} height={100} />,
      title: 'Syllabus',
      description: 'Our comprehensive syllabus is designed to align with national educational standards, ensuring that students receive a well-rounded and relevant education.'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="section-title">OUR OFFERINGS</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
