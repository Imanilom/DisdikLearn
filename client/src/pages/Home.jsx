import React from 'react';
import { useSelector } from 'react-redux';
import HeroSection from '../components/Partial/HeroSection';
import About from '../components/Partial/About';
import Services from '../components/Partial/Struktur';
import Footer from '../components/Partial/Footer';
import MultiPages from '../components/Partial/Multipages';
import Team from '../components/Partial/Team';


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
      <MultiPages />
      <Team/>
      <Footer />
      
    </div>
  );
};

export default Home;
