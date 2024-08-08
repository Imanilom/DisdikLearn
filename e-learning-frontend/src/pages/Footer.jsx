import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Yayasan Pendidikan</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaTwitter className="h-6 w-6" />
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
          <p className="text-blue-500">+62 834 587 1478</p>
          <p className="text-blue-500">Pendidikanyayasan@Gmail.Com</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Lokasi</h4>
          <p className="text-blue-500">Jl. Soreang Pendidikan</p>
          <p className="text-blue-500">Soreang</p>
          <p className="text-blue-500">Kabupaten Bandung</p>
        </div>
      </div>
      <div className="border-t border-blue-500 mt-6 pt-6 text-center">
        <p className="text-blue-500">Created By Yayasan Pendidikan | All Rights Are Reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
