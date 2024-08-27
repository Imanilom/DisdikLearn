import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Yayasan Dinas Pendidikan </h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaYoutube className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-black">+62 834 587 1478</p>

          <p className="text-black">DinasPendidikanyayasan@Gmail.Com</p>
          <div className="w-16 border-t-2 bg-gray-200 mb-6 mx-auto"></div>
          <p className="text-black">Pendidikanyayasan@gmail.com</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Lokasi</h4>
          <div className="h-48 w-full md:w-80">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1664.933319726369!2d107.52756376558796!3d-7.020910590264213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ec329f509361%3A0x220e274e55f0494f!2sDinas%20Pendidikan%20%26%20Kebudayaan!5e0!3m2!1sen!2sid!4v1724203631013!5m2!1sen!2sid"
             title="Location Map"
             className="w-full h-auto border-none"
             loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
         </div>
      <div className="border-t border-white mt-6 pt-6 text-center">
        <p className="text-black">Created By Yayasan Pendidikan | All Rights Are Reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
