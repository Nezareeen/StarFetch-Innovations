import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Leadership from '../components/Leadership';
import Courses from '../components/Courses';
import MonsterSeries from '../components/MonsterSeries';
import Gallery from '../components/Gallery';
import Collaborators from '../components/Collaborators';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Home = () => {
  return (
    <div className="home-page">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Leadership />
      <Courses />
      <MonsterSeries />
      <Gallery />
      <Collaborators />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
