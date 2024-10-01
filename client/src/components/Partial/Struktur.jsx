import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Struktur = () => {
  const [isExpanded, setIsExpanded] = useState(null); // State to track which container is clicked

  // Function to handle click event
  const handleClick = (index) => {
    setIsExpanded(isExpanded === index ? null : index); // Toggle between expand and collapse
  };

  return (
    <div className="bg-[url('../src/assets/Disdik.jpg')] bg-cover bg-center min-h-screen flex flex-col items-center py-6 opacity-60">
      <div className="container mx-auto px-4 max-w-4xl opacity-100">
        {/* Hero Section */}
        <section className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Struktur Yayasan</h1>
        </section>

        {/* Struktur Organisasi */}
        <section className="text-center mb-6">
          {/* Baris Pertama */}
          <div className="flex justify-center mb-10 space-x-6">
            <motion.div
              className="p-3 bg-white shadow-md rounded-lg text-center w-full max-w-xs cursor-pointer"
              onClick={() => handleClick(1)}
              animate={{ scale: isExpanded === 1 ? 1.1 : 1 }} // Scale animation on click
              whileHover={{ scale: 1.05 }} // Slight scale on hover
              transition={{ duration: 0.3 }}
            >
              <img src="../src/assets/teacher-1.png" alt="Ketua Kelas" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="text-md font-semibold text-black mb-1">Ketua Kelas</h3>
              <p className="text-black">Nama Lengkap</p>
            </motion.div>
          </div>

          {/* Baris Kedua */}
          <div className="flex justify-center mb-10 space-x-6">
            <motion.div
              className="p-3 bg-white shadow-md rounded-lg text-center w-full max-w-xs cursor-pointer"
              onClick={() => handleClick(2)}
              animate={{ scale: isExpanded === 2 ? 1.1 : 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="../src/assets/teacher-2.png" alt="Sekretaris" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="text-md font-semibold text-black mb-1">Sekretaris</h3>
              <p className="text-black">Nama Lengkap</p>
            </motion.div>
          </div>

          {/* Baris Ketiga */}
          <div className="flex justify-center space-x-6">
            <motion.div
              className="p-3 bg-white shadow-md rounded-lg text-center w-full max-w-xs cursor-pointer"
              onClick={() => handleClick(3)}
              animate={{ scale: isExpanded === 3 ? 1.1 : 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="../src/assets/teacher-3.png" alt="Seksi Kebersihan" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="text-md font-semibold text-black mb-1">Seksi Kebersihan</h3>
              <p className="text-black">Nama Lengkap</p>
            </motion.div>

            <motion.div
              className="p-3 bg-white shadow-md rounded-lg text-center w-full max-w-xs cursor-pointer"
              onClick={() => handleClick(4)}
              animate={{ scale: isExpanded === 4 ? 1.1 : 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="../src/assets/teacher-2.png" alt="Seksi Kebersihan" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="text-md font-semibold text-black mb-1">Seksi Kebersihan</h3>
              <p className="text-black">Nama Lengkap</p>
            </motion.div>

            <motion.div
              className="p-3 bg-white shadow-md rounded-lg text-center w-full max-w-xs cursor-pointer"
              onClick={() => handleClick(5)}
              animate={{ scale: isExpanded === 5 ? 1.1 : 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="../src/assets/teacher-3.png" alt="Seksi Kebersihan" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="text-md font-semibold text-black mb-1">Seksi Kebersihan</h3>
              <p className="text-black">Nama Lengkap</p>
            </motion.div>
          </div>

          {/* Baris Keempat */}
          <div className="flex justify-center space-x-6 mb-6 py-6">
            <motion.div
              className="p-3 bg-white shadow-md rounded-lg text-center w-full max-w-xs cursor-pointer"
              onClick={() => handleClick(6)}
              animate={{ scale: isExpanded === 6 ? 1.1 : 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="../src/assets/teacher-3.png" alt="Seksi Kebersihan" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="text-md font-semibold text-black mb-1">Seksi Kebersihan</h3>
              <p className="text-black">Nama Lengkap</p>
            </motion.div>

            <motion.div
              className="p-3 bg-white shadow-md rounded-lg text-center w-full max-w-xs cursor-pointer"
              onClick={() => handleClick(7)}
              animate={{ scale: isExpanded === 7 ? 1.1 : 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="../src/assets/teacher-1.png" alt="Seksi Kebersihan" className="w-20 h-20 rounded-full mx-auto mb-2" />
              <h3 className="text-md font-semibold text-black mb-1">Seksi Kebersihan</h3>
              <p className="text-black">Nama Lengkap</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Struktur;
