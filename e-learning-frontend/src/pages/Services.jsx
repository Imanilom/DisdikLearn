import React from 'react';
import { useSelector } from 'react-redux';

const Service = () => {
    // Mengakses informasi pengguna dari state Redux
    const user = useSelector((state) => state.auth.user);

    const services = [
        {
            title: "PKBM",
            description: "Pusat Kegiatan Belajar Masyarakat",
            imgSrc: "src/assets/logo_yayasan.png" // Pastikan path ini benar sesuai dengan lokasi file gambar Anda
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
        <div>
        
            <div className="min-h-screen flex flex-col items-center  bg-white py-12">
                <h1 className="text-4xl font-bold text-blue-500 mb-">E-Learning</h1>
                <div className="w-16 border-t-2 border-b-2 border-blue-500 my-3"></div>
                <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center m-10">
                            <img
                                src={service.imgSrc}
                                alt={service.title}
                                className="w-32 h-32 mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2 text-center">{service.title}</h2>
                            <p className="text-gray-600 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
