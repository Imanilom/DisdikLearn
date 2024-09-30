import React from 'react';

const Printing = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Selamat Datang Keterampilan Digital Printing </h2>
            <p className="text-gray-600 mb-6">
              Platform pembelajaran yang terintegrasi untuk menguasai teknik dan strategi digital printing. Belajar dengan praktis dan fleksibel.
            </p>
            <a href="#signup" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition">Mulai Sekarang</a>
          </div>
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img src="../src/assets/Disdik.jpg" alt="LMS Illustration" className="w-full rounded-md shadow-md" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Fitur Unggulan</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Feature 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-indigo-600 mb-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Kurikulum</h4>
              <p className="text-gray-600">Materi yang disusun secara sistematis untuk memudahkan pembelajaran digital printing Anda.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-indigo-600 mb-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3m6 0c0-1.657-1.343-3-3-3m3 3v4m0 0h2m-2 0H10m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Materi</h4>
              <p className="text-gray-600">Fitur interaktif seperti tugas praktik dan forum diskusi untuk meningkatkan partisipasi Anda.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-indigo-600 mb-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Penilaian</h4>
              <p className="text-gray-600">Pantau kemajuan belajar Anda dengan dashboard analitik yang lengkap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="container mx-auto px-6 py-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Kurikulum</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Module 1 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 1: Pengenalan Digital Printing</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dasar-Dasar Digital Printing</li>
                <li>Pengenalan Alat dan Bahan</li>
                <li>Teknik Dasar Cetak</li>
                <li>Manajemen Warna</li>
              </ul>
            </div>
          </div>
          {/* Module 2 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 2: Teknik Cetak Lanjutan</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Teknik Cetak Offset</li>
                <li>Teknik Cetak Digital</li>
                <li>Penggunaan Mesin Cetak Modern</li>
                <li>Optimasi Proses Cetak</li>
              </ul>
            </div>
          </div>
          {/* Module 3 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 3: Desain dan Prepress</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dasar-Dasar Desain Grafis</li>
                <li>Penggunaan Software Desain</li>
                <li>Proses Prepress</li>
                <li>Mengoptimalkan File untuk Cetak</li>
              </ul>
            </div>
          </div>
          {/* Module 4 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 4: Manajemen Produksi Cetak</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Perencanaan Produksi</li>
                <li>Pengelolaan Inventaris</li>
                <li>Kontrol Kualitas</li>
                <li>Manajemen Waktu dan Sumber Daya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="container mx-auto px-6 py-20 bg-gray-50">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Materi yang Disampaikan</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Material 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Video Tutorial</h4>
              <p className="text-gray-600">Akses ke video tutorial berkualitas tinggi yang menjelaskan setiap langkah teknik digital printing secara detail.</p>
            </div>
          </div>
          {/* Material 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">E-Book dan Panduan</h4>
              <p className="text-gray-600">Materi bacaan yang komprehensif untuk mendukung pembelajaran Anda dalam setiap modul.</p>
            </div>
          </div>
          {/* Material 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Forum Diskusi</h4>
              <p className="text-gray-600">Tempat bagi Anda untuk berdiskusi, bertanya, dan berbagi pengalaman dengan sesama peserta LMS.</p>
            </div>
          </div>
          {/* Material 4 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Tugas Praktik</h4>
              <p className="text-gray-600">Latihan praktis yang dirancang untuk mengasah keterampilan digital printing Anda secara langsung.</p>
            </div>
          </div>
          {/* Material 5 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Webinar dan Live Session</h4>
              <p className="text-gray-600">Sesi langsung dengan instruktur untuk mendapatkan wawasan lebih mendalam dan menjawab pertanyaan Anda.</p>
            </div>
          </div>
          {/* Material 6 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Sertifikat</h4>
              <p className="text-gray-600">Dapatkan sertifikat resmi setelah menyelesaikan kursus sebagai bukti kompetensi Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Assessment Section */}
      <section id="assessment" className="container mx-auto px-6 py-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Penilaian Pengguna</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Assessment 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Ujian Tulis</h4>
              <p className="text-gray-600">Evaluasi pengetahuan teoritis Anda melalui serangkaian pertanyaan pilihan ganda.</p>
            </div>
          </div>
          {/* Assessment 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Proyek Akhir</h4>
              <p className="text-gray-600">Terapkan strategi digital printing Anda dalam proyek nyata untuk menunjukkan kemampuan Anda.</p>
            </div>
          </div>
          {/* Assessment 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Penilaian Peer</h4>
              <p className="text-gray-600">Dapatkan umpan balik dari sesama peserta untuk meningkatkan kualitas kerja Anda.</p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Apa Kata Mereka</h3>
        <div className="flex flex-wrap -mx-4">
          {/* Testimonial 1 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"LMS ini membantu saya memahami teknik digital printing dengan lebih baik. Materinya sangat praktis dan aplikatif."</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-gray-800 font-semibold">Budi Santoso</h4>
                  <span className="text-gray-500">Desainer Grafis</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Fitur interaktifnya sangat membantu saya dalam menerapkan strategi digital printing di bisnis saya."</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-gray-800 font-semibold">Rina Maharani</h4>
                  <span className="text-gray-500">Pemilik Toko Percetakan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600">
        <div className="container mx-auto px-6 py-20 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Siap Meningkatkan Keterampilan Digital Printing Anda?</h3>
          <p className="text-lg mb-8">Bergabunglah dengan ribuan profesional yang telah sukses menggunakan LMS kami.</p>
          <a href="#signup" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">Mulai Sekarang</a>
        </div>
      </section>
    </div>
  );
};

export default Printing;
