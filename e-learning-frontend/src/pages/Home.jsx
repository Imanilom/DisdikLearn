import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-start">
              <img src="src/assets/logoan.jpeg" alt="logoan" className="h-8 w-auto sm:h-10" />
            </div>
            <nav className="flex-grow flex justify-center space-x-3">
              <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">E-Learning</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Guru</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Review</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Blog</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-user-circle"></i>
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main>
        <div className="relative">
          <img 
            src="src/assets/lms.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="text-center max-w-2xl">
              <h1 className="text-white text-4xl font-bold mb-4">YAYASAN PENDIDIKAN</h1>
              <p className="text-white mb-8 text-left ">
                Yayasan Pendidikan Kesejahteraan ELearning Memiliki Visi Untuk Menjadi Lembaga Pendidikan
                Terkenuka Yang Menyediakan Akses Pendidikan Berkualitas Tinggi Bagi Masyarakat Luas Melalui
                Platform ELearning Yang Inovatif Dan Inklusif
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;