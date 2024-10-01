import React from 'react';
import { motion } from 'framer-motion';

const Lmspkbm = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section
        className="bg-blue-500 text-white py-20 md:py-60 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url('../src/assets/hero-1.jpg')" }}
      >
        <div className="container mx-auto text-center px-4 mb-10 ">
    
    {/* Container untuk Logo */}
    <div className="mx-auto p-3 mb-5 bg-white rounded-lg shadow-lg w-fit  -mb-2">
      <img 
        src="../src/assets/logo.png" 
        alt="Logo LMS PKBM" 
        className="w-28 h-24 mx-auto mb-6" // Ukuran dan margin logo
      />
    </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Selamat Datang di LMS PKBM</h2>
          <p className="text-base md:text-lg mb-8 font-mono">Pusat Kegiatan Belajar Masyarakat. Ini adalah sebuah lembaga pendidikan nonformal di Indonesia yang menyediakan layanan pendidikan untuk masyarakat, terutama bagi mereka yang tidak dapat mengikuti pendidikan formal di sekolah umum.</p>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* About Section with Sticky Notes */}
      <motion.section
        id="about"
        className="py-16 md:py-20 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 2.0 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-left mb-6 relative">
              About PBKM
              <motion.div
                className="absolute bottom-0 left-0 h-[4px] bg-lime-300 -mb-2"
                initial={{ width: 0 }}
                animate={{ width: '20%' }}
                transition={{ duration: 1.5 }}
              />
            </h3>
            <p className="text-base md:text-lg mb-6">
              LMS PKBM adalah platform pembelajaran online yang dirancang khusus untuk mendukung pendidikan jarak jauh. Kami memberikan berbagai fitur pembelajaran yang membantu siswa dan guru untuk berinteraksi dan belajar dengan mudah.
            </p>
          </div>

          {/* Sticky Notes */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex space-x-4 md:space-x-6">
              {/* Sticky Note 1 */}
              <motion.div
                className="w-36 md:w-48 h-36 md:h-48 bg-purple-100 rounded-lg p-4 shadow-lg"
                initial={{ rotate: -5 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold">Urgent!!!</h4>
                <p className="text-xs md:text-sm mt-2">Selesaikan tugas proyek ini secepatnya.</p>
              </motion.div>

              {/* Sticky Note 2 */}
              <motion.div
                className="w-36 md:w-48 h-36 md:h-48 bg-blue-100 rounded-lg p-4 shadow-lg"
                initial={{ rotate: 5 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold">Reminder</h4>
                <p className="text-xs md:text-sm mt-2">Meeting dengan team jam 10 pagi.</p>
              </motion.div>

              {/* Sticky Note 3 */}
              <motion.div
                className="w-36 md:w-48 h-36 md:h-48 bg-pink-100 rounded-lg p-4 shadow-lg"
                initial={{ rotate: -5 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold">Important</h4>
                <p className="text-xs md:text-sm mt-2">Review desain UI/UX minggu depan.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section (Paket A, B, C) */}
      <section id="programs" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Jenis Keterampilan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Animasi untuk Paket A */}
            <motion.div
              className="bg-white p-6 shadow-md rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="../src/assets/teacher-3.png" alt="Menjahit" className="w-full h-52 md:h-80 object-cover rounded-lg mb-4" />
              <h4 className="text-lg md:text-xl font-bold mb-4">Paket A(Setara SD)</h4>
              <p className="text-sm md:text-base mb-6">
                Program ini ditujukan untuk siswa yang belum menyelesaikan pendidikan dasar setara SD.
              </p>
              <a
                href="PaketA"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Masuk
              </a>
            </motion.div>

            {/* Animasi untuk Paket B */}
            <motion.div
              className="bg-white p-6 shadow-md rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="../src/assets/teacher-2.png" alt="Digital" className="w-full h-52 md:h-80 object-cover rounded-lg mb-4" />
              <h4 className="text-lg md:text-xl font-bold mb-4">Paket B(Setara SMP)</h4>
              <p className="text-sm md:text-base mb-6">
                Program ini ditujukan untuk siswa yang ingin menyelesaikan pendidikan setara SMP.
              </p>
              <a
                href="PaketB"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Masuk
              </a>
            </motion.div>

            {/* Animasi untuk Paket C */}
            <motion.div
              className="bg-white p-6 shadow-md rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src="../src/assets/teacher-1.png" alt="Bahasa" className="w-full h-52 md:h-80 object-cover rounded-lg mb-4" />
              <h4 className="text-lg md:text-xl font-bold mb-4">Paket C (Setara SMA)</h4>
              <p className="text-sm md:text-base mb-6">
                Program ini ditujukan untuk siswa yang ingin menyelesaikan pendidikan setara SMA.
              </p>
              <a
                href="PaketC"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Masuk
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-left -mb-10">Hubungi Kami</h3>
        </div>
      </section>

      <footer className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
          {/* Logo and Description */}
          <div className="flex-1">
            <img src="../src/assets/logo_yayasan.png" alt="Logo" className="mb-4 h-24 w-24" />
            <p className="text-sm text-gray-700">
              Hostinger memberikan kemudahan bagi siapa pun yang ingin sukses online. Kami terus menyempurnakan teknologi server, menyediakan bantuan profesional, dan memberikan pengalaman web hosting yang mulus.
            </p>
            <div className="mt-4 flex space-x-2">
              <img src="/path-to-visa.png" alt="Visa" className="h-6" />
              <img src="/path-to-mastercard.png" alt="MasterCard" className="h-6" />
              <img src="/path-to-paypal.png" alt="PayPal" className="h-6" />
              <span className="text-gray-700 text-sm">Dan Lainnya</span>
            </div>
          </div>

          {/* Hosting Links */}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-4">HOSTING</h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li><a href="/web-hosting" className="hover:underline">Web Hosting</a></li>
              <li><a href="/vps-hosting" className="hover:underline">VPS Hosting</a></li>
              <li><a href="/cloud-hosting" className="hover:underline">Cloud Hosting</a></li>
              <li><a href="/wordpress-hosting" className="hover:underline">WordPress Hosting</a></li>
            </ul>
          </div>

          {/* Domain Links */}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-4">DOMAIN</h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li><a href="/domain-murah" className="hover:underline">Domain Murah</a></li>
              <li><a href="/transfer-domain" className="hover:underline">Transfer Domain</a></li>
              <li><a href="/domain-gratis" className="hover:underline">Domain Gratis</a></li>
              <li><a href="/domain-xyz" className="hover:underline">Domain .XYZ</a></li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800 mb-4">INFORMASI</h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li><a href="/migrasi-website" className="hover:underline">Migrasi Website</a></li>
              <li><a href="/status-sistem" className="hover:underline">Status Sistem</a></li>
              <li><a href="/afiliasi" className="hover:underline">Afiliasi</a></li>
              <li><a href="/harga" className="hover:underline">Harga</a></li>
            </ul>
          </div>

        </div>

        <hr className="my-8 border-gray-300" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600">
            © 2004-2024 hostinger.co.id - Web Hosting Premium, Layanan Cloud, VPS, & Registrasi Domain.
          </div>
          <div>
            <ul className="text-sm flex space-x-4 text-gray-700">
              <li><a href="/tentang-kami" className="hover:underline">Tentang Kami</a></li>
              <li><a href="/teknologi-kami" className="hover:underline">Teknologi Kami</a></li>
              <li><a href="/hubungi-kami" className="hover:underline">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Lmspkbm;
