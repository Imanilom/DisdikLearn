import React from 'react';
import PaketA from './PaketA';

<PaketA/>
const Pendidikan = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-10 mt-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
        <h1 className="text-4xl font-bold text-black mb-8">Pendidikan Agama</h1>
        <p className="text-lg text-gray-700">
          Selamat datang di halaman Pendidikan Agama. Di sini, Anda akan mempelajari berbagai aspek penting dalam pendidikan agama, mulai dari nilai-nilai keagamaan, ajaran moral, hingga penerapan dalam kehidupan sehari-hari.
        </p>
        <p className="mt-4 text-gray-700">
          Materi yang diajarkan mencakup pelajaran tentang ajaran agama, tata cara ibadah, serta pemahaman terhadap kehidupan beragama.
        </p>

        {/* Tampilkan konten tambahan tentang Pendidikan Agama di sini */}
      </div>
    </div>
  );
};

export default Pendidikan;
