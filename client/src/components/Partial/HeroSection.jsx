import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const backgrounds = [
    '../src/assets/hero-1.jpg',
    '../src/assets/Disdik.jpg',
    '../src/assets/blog-1.jpg',
  ];
  
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handleClick = (e) => {
    e.target.classList.add('animate-ping');
    setTimeout(() => {
      e.target.classList.remove('animate-ping');
    }, 300);
  };

  return (
    <section className="relative bg-white-100">
      <div className="relative h-screen">
        <img
          src={backgrounds[currentBgIndex]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 py-40 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-5xl font-bold text-white">
            YAYASAN PENDIDIKAN 
          </h1>
          <p className="text-xl text-white mt-5">
            Yayasan Pendidikan adalah sebuah organisasi non-profit yang bertujuan untuk meningkatkan kualitas pendidikan dan memberikan akses yang lebih luas kepada masyarakat. 
          </p>

          <div className="flex space-x-5 mt-8">
            <button
              className="bg-gray-300 text-black py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={handleClick}
            >
              Get Started
            </button>
            <button
              className="bg-gray-300 text-black py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={handleClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6">
            {/* Icon Section */}
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce"
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce"
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce"
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce"
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce"
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
          </div>

          <div className="mt-6 md:mt-0 text-center md:text-left">
            <p className="text-sm mb-2">
              A 20 minute home visit for pets who don’t need a walk, but love having friends over.
            </p>
            <p className="text-sm">
              Learn more about drop-in pet care
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              className="bg-gray-300 text-black py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={handleClick}
            >
              Book Drop-in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
