import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <img src="../src/assets/logo_yayasan.png" alt="Hostinger Logo" className="mb-4 h-24 w-24" />
            <p className="text-sm">
              Hostinger memberikan kemudahan bagi siapa pun yang ingin sukses online. Kami terus menyempurnakan teknologi server, menyediakan bantuan profesional, dan memberikan pengalaman web hosting yang mulus.
            </p>
            {/* Payment Methods */}
            <div className="flex mt-4">
              <img src="visa.png" alt="Visa" className="h-8 mr-2" />
              <img src="mastercard.png" alt="MasterCard" className="h-8 mr-2" />
              <img src="paypal.png" alt="PayPal" className="h-8 mr-2" />
              {/* Add other payment icons as needed */}
              <span className="flex items-center">Dan Lainnya</span>
            </div>
          </div>

          {/* Hosting Links */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
            <h4 className="font-bold mb-4">HOSTING</h4>
            <ul>
              <li><a href="#" className="text-sm hover:underline">Web Hosting</a></li>
              <li><a href="#" className="text-sm hover:underline">VPS Hosting</a></li>
              <li><a href="#" className="text-sm hover:underline">Cloud Hosting</a></li>
              <li><a href="#" className="text-sm hover:underline">WordPress Hosting</a></li>
              {/* Add more items */}
            </ul>
          </div>

          {/* Domain Links */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
            <h4 className="font-bold mb-4">DOMAIN</h4>
            <ul>
              <li><a href="#" className="text-sm hover:underline">Domain Murah</a></li>
              <li><a href="#" className="text-sm hover:underline">Transfer Domain</a></li>
              <li><a href="#" className="text-sm hover:underline">Domain Gratis</a></li>
              <li><a href="#" className="text-sm hover:underline">Domain .XYZ</a></li>
            </ul>
          </div>

          {/* Informasi Links */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
            <h4 className="font-bold mb-4">INFORMASI</h4>
            <ul>
              <li><a href="#" className="text-sm hover:underline">Migrasi Website</a></li>
              <li><a href="#" className="text-sm hover:underline">Status Sistem</a></li>
              <li><a href="#" className="text-sm hover:underline">Afiliasi</a></li>
              <li><a href="#" className="text-sm hover:underline">Harga</a></li>
            </ul>
          </div>

          {/* Perusahaan Links */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-8">
            <h4 className="font-bold mb-4">PERUSAHAAN</h4>
            <ul>
              <li><a href="#" className="text-sm hover:underline">Tentang Kami</a></li>
              <li><a href="#" className="text-sm hover:underline">Teknologi Kami</a></li>
              <li><a href="#" className="text-sm hover:underline">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-8">
          {/* Copyright */}
          <p className="text-sm">&copy; 2004-2024 hostinger.co.id - Web Hosting Premium, Layanan Cloud, VPS, & Registrasi Domain.</p>
          
          {/* Social Media Links */}
          <div className="flex">
            <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
