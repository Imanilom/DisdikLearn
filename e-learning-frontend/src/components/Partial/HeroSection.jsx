import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white-100">
      <div className="relative h-screen"> {/* Menggunakan h-screen untuk ketinggian penuh layar */}
        <img
          src="../src/assets/hero-1.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center" // object-center untuk posisi tengah
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-40 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-5xl font-bold text-white">
            YAYASAN PENDIDIKAN 
          </h1>
          <p className="text-xl text-white mt-5">
            Yayasan Pendidikan adalah sebuah organisasi non-profit yang bertujuan untuk meningkatkan kualitas pendidikan dan memberikan akses yang lebih luas kepada masyarakat. 
          </p>

          {/* Tambahkan tombol Get Started dan tombol tambahan di sini */}
          <div className="flex space-x-5 mt-8">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
              Get Started
            </button>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce" // Animasi bouncing
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce" // Animasi berputar perlahan
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce" // Animasi pulsasi (membesar dan mengecil)
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce" // Animasi goyang kiri kanan
              />
              <p className="text-sm mt-2">E-learning</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="../src/assets/logo_yayasan.png" 
                alt="E-learning" 
                className="w-12 h-12 animate-bounce" // Animasi bouncing
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
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
              Book Drop-in
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
