// components/Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import HeroSection from '../components/Partial/HeroSection'; // Ensure the path is correct
import About from '../components/Partial/About';
import Services from '../components/Partial/Services';
import Team from '../components/Partial/Team';
import Carousel from '../components/Partial/Carousel';
import Footer from '../components/Partial/Footer';
const Home = () => {
  // Access user information from the Redux state
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <HeroSection />
      <About/>
      <Services/>
      {/* <Team/> */}
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default Home;