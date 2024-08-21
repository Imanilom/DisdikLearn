import React from 'react';
import { useSelector } from 'react-redux';
import HeroSection from '../components/Partial/HeroSection';
import About from '../components/Partial/About';
import Services from '../components/Partial/Services';
import Carousel from '../components/Partial/Carousel';
import Footer from '../components/Partial/Footer';

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <HeroSection />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
