import React from 'react';
import { useNavigate } from 'react-router-dom';

const MultiPages = () => {
  const navigate = useNavigate();

  const handlePKBMClick = () => {
    navigate('/lmspkbm');
  };

  const handleLKPClick = () => {
    navigate('/Lkp');
  };

  return (
    <div className="flex flex-col justify-center items-left min-h-screen bg-greey-50 px-20 py-10 ">
      {/* Judul Teks */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
      LMS (Learning Management System) 
      </h1>
      <p className="text-gray-600 mb-8">
      LMS memudahkan penyelenggara pendidikan atau pelatihan untuk mengelola konten kursus, memantau kemajuan peserta, serta memberikan materi dan evaluasi secara digital.
      </p>
      
      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-8">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">PKBM</button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">LKP</button>
      </div>

      {/* Grid Layout untuk Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div 
          className="relative p-8 bg-white text-black rounded-lg shadow-lg cursor-pointer hover:bg-gray-100"
          onClick={handlePKBMClick}
        >
          <img 
            src="../src/assets/hero-1.jpg" 
            alt="Dasar-dasar AI Generatif" 
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Pusat Kegiatan Belajar Mengajar</h2>
          <p className="text-sm text-gray-500">PKBM</p>
        </div>

        {/* Card 2 */}
        <div 
          className="relative p-8 bg-white text-black rounded-lg shadow-lg cursor-pointer hover:bg-gray-100"
          onClick={handleLKPClick}
        >
          <img 
            src="../src/assets/hero-1.jpg" 
            alt="AI untuk Kebaikan" 
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
         
          <h2 className="text-2xl font-bold mb-2">Lembaga Kursus dan Pelatihan</h2>
          <p className="text-sm text-gray-500">LKP</p>
        </div>
      </div>
    </div>
  );
};

export default MultiPages;
