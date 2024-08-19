// components/HeroSection.jsx
import React from 'react';
import heroImage from '../../assets/Disdik.jpg'; // Replace with your background image

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
      <div className="container mx-auto h-full flex items-center px-4 lg:px-0">
        <div className="relative z-10 flex-1 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            YAYASAN PENDIDIKAN
          </h1>
          <p className="text-lg text-white mb-9">
          Yayasan pendidikan adalah organisasi nirlaba yang didirikan dengan tujuan untuk meningkatkan kualitas pendidikan. Yayasan ini biasanya berfokus pada berbagai aspek pendidikan seperti menyediakan beasiswa, mendirikan sekolah, mengadakan pelatihan untuk guru, menyelenggarakan program pendidikan non-formal, dan mengembangkan kurikulum pendidikan.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </div>
        {/* <div className="relative flex-1 hidden lg:block">
          <div className="absolute bottom-0 right-0 flex items-center justify-center space-x-4">
            <div className="w-48 h-48 bg-blue-500 rounded-full"></div>
            <div className="w-64 h-64 bg-yellow-500 rounded-full"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
