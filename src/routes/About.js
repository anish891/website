import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="ABOUT." text="I'm a Software Engineer with experience in Python, React, JavaScript, Flutter and Java seeking full-time roles." />
      <AboutContent />
      <Footer />
    </div>
  )
};

export default About