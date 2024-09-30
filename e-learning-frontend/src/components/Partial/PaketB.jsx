import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Pastikan import Link dari react-router-dom
const PaketA = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-200 to-teal-400 text-white text-center py-16 rounded-lg shadow-2xl mb-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold tracking-wider animate-pulse">Program Paket A</h1>
          <p className="mt-4 text-2xl font-light">Kurikulum, Foto Kegiatan, Guru Pengajar, dan Testimoni</p>
        </motion.div>

        {/* Floating Design Elements */}
        <motion.div
          className="absolute -top-16 -left-16 bg-white rounded-full h-64 w-64 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 bg-white rounded-full h-80 w-80 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        />
      </div>

       {/* Kurikulum Section */}
<div className="bg-white p-10 mt-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
  <h2 className="text-3xl font-bold text-black mb-8 border-b-4 pb-2">Kurikulum</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-center">
    {[
      { name: 'Pendidikan Agama', link: '/kurikulum/pendidikan-agama' },
      { name: 'Matematika Dasar', link: '/kurikulum/matematika-dasar' },
      { name: 'Bahasa Indonesia', link: '/kurikulum/bahasa-indonesia' },
      { name: 'Ilmu Pengetahuan Sosial', link: '/kurikulum/ilmu-pengetahuan-sosial' },
      { name: 'Pendidikan Kewarganegaraan', link: '/kurikulum/pendidikan-kewarganegaraan' },
      { name: 'Keterampilan dan Seni', link: '/kurikulum/keterampilan-seni' }
    ].map((subject, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center justify-center bg-blue-100 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-lg hover:bg-blue-200 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        {/* Membungkus setiap pelajaran dengan Link */}
        <Link to={subject.link} className="flex items-center justify-center h-full w-full">
          <p className="text-center text-sm font-semibold text-gray-800">{subject.name}</p>
        </Link>
      </motion.div>
    ))}
  </div>
</div>



      {/* Foto Section */}
      <div className="bg-white p-10 mt-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <h2 className="text-3xl font-bold text-black mb-8 border-b-4 pb-2">Foto Kegiatan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Kegiatan Belajar', 'Eksperimen Sains', 'Aktivitas Luar Ruang'].map((foto, index) => (
            <div key={index} className="group relative">
              <img
                src={`../src/assets/Disdik.jpg`}
                alt={foto}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
                <p className="text-white text-lg font-semibold">{foto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guru Pengajar Section */}
      <div className="bg-white p-10 mt-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <h2 className="text-3xl font-bold text-black mb-8 border-b-4 pb-2">Guru Pengajar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: 'Budi Santoso', subject: 'Matematika', experience: '10 Tahun Pengalaman' },
            { name: 'Siti Nurhaliza', subject: 'Bahasa Indonesia', experience: '8 Tahun Pengalaman' },
            { name: 'Agus Pranoto', subject: 'Ilmu Pengetahuan Sosial', experience: '12 Tahun Pengalaman' }
          ].map((guru, index) => (
            <div key={index} className="text-center group">
              <img
                src={`../src/assets/teacher-1.png`}
                alt={guru.name}
                className="mx-auto rounded-full w-32 h-32 shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{guru.name}</h3>
              <p className="text-gray-600">{guru.subject}</p>
              <p className="text-gray-500 text-sm">{guru.experience}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimoni Section */}
      <div className="bg-white p-10 mt-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <h2 className="text-3xl font-bold text-black mb-8 border-b-4 pb-2">Testimoni Alumni</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: 'Arif Hidayat', testimonial: 'Program ini sangat membantu dalam pendidikan dasar anak saya.' },
            { name: 'Dewi Saraswati', testimonial: 'Guru-gurunya sangat berpengalaman dan perhatian terhadap murid.' },
            { name: 'Rina Aulia', testimonial: 'Anak saya sangat senang dengan kurikulum yang interaktif.' }
          ].map((alumni, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="italic text-gray-700 mb-4">&ldquo;{alumni.testimonial}&rdquo;</p>
              <h4 className="font-bold text-blue-600">{alumni.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-500 to-green-400 text-white text-center py-16 mt-16 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Gabung dengan Kami di Program Paket A</h2>
        <p className="text-xl mb-8">Dapatkan pengalaman belajar yang luar biasa dengan kurikulum yang terstruktur dan guru yang berpengalaman.</p>
        <button className="bg-white text-teal-600 py-3 px-8 rounded-full font-bold shadow-md hover:bg-teal-600 hover:text-white transition duration-300">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
};

export default PaketA;
