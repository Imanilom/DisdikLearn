import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

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
          <p className="text-blue-500">+62 834 587 1478</p>
          <p className="text-blue-500">Pendidikanyayasan@gmail.com</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Lokasi</h4>
          <div className="h-48 w-full md:w-80">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8859096404817!2d107.59743547424301!3d-6.904244667566918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e641a124a753%3A0x46aaa85c69605ea7!2sDinas%20Pendidikan%20Provinsi%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1723691851325!5m2!1sen!2sid" 
             title="Location Map"
             className="w-full h-auto border-none"
             loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-500 mt-6 pt-6 text-center">
        <p className="text-blue-500">Created By Yayasan Pendidikan | All Rights Are Reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
