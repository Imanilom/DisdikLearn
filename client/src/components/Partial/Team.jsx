import React from 'react';

const Team = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Kolom Teks */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Salin Kerja Sama
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Dapatkan pembelajaran dan pengembangan kelas dunia yang dipilih oleh organisasi terkemuka di seluruh dunia. Semua ada di Coursera untuk Bisnis.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Kerja sama
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Ingin meningkatkan keterampilan tim kecil?{' '}
            <a href="#" className="text-blue-600 underline">
              Lihat Coursera for Teams
            </a>
          </p>
        </div>

        {/* Kolom Logo */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 lg:ml-12">
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="L'Oréal" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="P&G" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="Tata" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="Danone" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="Emirates NBD" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="Reliance" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="Capgemini" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="Petrobras" />
          </div>
          <div className="flex justify-center">
            <img className="h-12" src="../src/assets/logo.png" alt="GE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
