import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Service = () => {
    const user = useSelector((state) => state.auth.user);

    const services = [
        {
            title: "PKBM",
            description: "Pusat Kegiatan Belajar Masyarakat",
            imgSrc: "src/assets/logo_yayasan.png"
        },
        {
            title: "LKP",
            description: "Lembaga Kursus Dan Pelatihan",
            imgSrc: "src/assets/logo_yayasan.png"
        },
        {
            title: "LMS",
            description: "Fun & Challenging",
            imgSrc: "src/assets/logo_yayasan.png"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h1>
            <div className="w-16 border-t-2 border-blue-600 mb-6"></div>
            <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ height: '350px', width: '250px' }} // Fixed size for uniformity
                    >
                        <img
                            src={service.imgSrc}
                            alt={service.title}
                            className="w-24 h-24 mb-4 rounded-full border-2 border-blue-500 object-cover" // Ensure the image fits well
                        />
                        <h2 className="text-xl font-semibold mb-2 text-center text-blue-700">{service.title}</h2>
                        <p className="text-gray-700 text-center flex-1 flex items-center justify-center">{service.description}</p>
                    </motion.div>
                ))}
            </div>
            {user && (
                <div className="mt-8 text-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
                        {user.role === 'admin' ? 'Manage Services' : 'Learn More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Service;
