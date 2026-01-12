import React from 'react';
import './Courses.css';
import ai from '../assets/courses/ai.png'
import threeD from '../assets/courses/3d.png'
import robotics from '../assets/courses/robotics.jpg'
import sensors from '../assets/courses/sensor.jpg'

const Courses = () => {
  const courses = [
    {
      title: 'AI & ML',
      image: ai
    },
    {
      title: '3D Printing & Physical Design',
      image: threeD
    },
    {
      title: 'Robotics Basics',
      image: robotics
    },
    {
      title: '3D Printing Basics',
      image: 'https://i.all3dp.com/wp-content/uploads/2019/08/12163517/the-parts-of-a-fdm-3d-printer-all3dp-190803_download4-772x434.jpg'
    },
    {
      title: 'Robotics Sensors & Actuators',
      image: sensors
    },
    {
      title: 'AI & IoT Projects',
      image: 'https://images.prismic.io/intuzwebsite/5b53bf45-9093-4508-9cd6-81e057dd9b4c_AIoT+Banner.png?w=1200&q=80&auto=format,compress&fm=png8'
    }
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <h2 className="section-title">COURSES WE PROVIDE</h2>
        <p className="courses-intro">
          Our comprehensive curriculum is designed to provide students with hands-on experience 
          in cutting-edge technologies. Each course is carefully structured to balance theoretical 
          knowledge with practical application, ensuring students develop both understanding and 
          skills necessary for future innovation.
        </p>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image-container">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="course-image"
                />
                <div className="course-overlay">
                  <h3 className="course-title">{course.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
