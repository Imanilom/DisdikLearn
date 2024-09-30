import React from 'react';

const Marketing = () => {
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Keterampilan Digital Marketing</h2>
            <p className="text-gray-600 mb-6">
              Platform pembelajaran yang terintegrasi untuk mengoptimalkan strategi pemasaran digital Anda. Belajar kapan saja, di mana saja.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Kurikulum</h4>
              <p className="text-gray-600">Materi yang disusun secara sistematis untuk memudahkan pembelajaran Anda.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-indigo-600 mb-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Materi</h4>
              <p className="text-gray-600">Fitur interaktif seperti kuis dan forum diskusi untuk meningkatkan partisipasi.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-indigo-600 mb-4">
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" />
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
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 1: Pengenalan Digital Marketing</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Dasar-Dasar Digital Marketing</li>
                <li>Pengenalan SEO dan SEM</li>
                <li>Pemasaran Media Sosial</li>
                <li>Content Marketing</li>
              </ul>
            </div>
          </div>
          {/* Module 2 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 2: Strategi SEO</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Riset Kata Kunci</li>
                <li>Optimasi On-Page</li>
                <li>Optimasi Off-Page</li>
                <li>Analisis dan Pelaporan SEO</li>
              </ul>
            </div>
          </div>
          {/* Module 3 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 3: Pemasaran Media Sosial</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Mengelola Akun Media Sosial</li>
                <li>Membuat Konten yang Menarik</li>
                <li>Strategi Iklan Berbayar</li>
                <li>Analisis Kinerja Media Sosial</li>
              </ul>
            </div>
          </div>
          {/* Module 4 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Module 4: Email Marketing</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Membangun Daftar Email</li>
                <li>Membuat Kampanye Email</li>
                <li>Segmentasi dan Personalisasi</li>
                <li>Analisis dan Optimasi Email</li>
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
              <p className="text-gray-600">Akses ke video tutorial berkualitas tinggi yang menjelaskan setiap langkah strategi digital marketing secara detail.</p>
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
              <p className="text-gray-600">Latihan praktis yang dirancang untuk mengasah keterampilan digital marketing Anda secara langsung.</p>
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
              <p className="text-gray-600">Terapkan strategi digital marketing Anda dalam proyek nyata untuk menunjukkan kemampuan Anda.</p>
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
              <p className="text-gray-600 mb-4">"LMS ini benar-benar mengubah cara saya belajar digital marketing. Materinya lengkap dan mudah dipahami."</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-gray-800 font-semibold">Andi Wijaya</h4>
                  <span className="text-gray-500">Pemilik Bisnis</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Fitur analitiknya sangat membantu saya memahami performa kampanye pemasaran saya."</p>
              <div className="flex items-center">
                <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-gray-800 font-semibold">Siti Rahma</h4>
                  <span className="text-gray-500">Marketing Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600">
        <div className="container mx-auto px-6 py-20 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Siap Meningkatkan Bisnis Anda?</h3>
          <p className="text-lg mb-8">Bergabunglah dengan ribuan profesional yang telah sukses menggunakan LMS kami.</p>
          <a href="#signup" className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">Mulai Sekarang</a>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
