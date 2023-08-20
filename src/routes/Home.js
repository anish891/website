import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer'
import Work from '../components/Work'


const home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Work />
      <Footer />
    </div>
  )
};

export default home