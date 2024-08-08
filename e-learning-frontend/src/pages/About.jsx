import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    // Mengakses informasi pengguna dari state Redux
    const user = useSelector((state) => state.auth.user);

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-2 text-gray-800">
                    About Us
                </h2>
                <p className="text-gray-700 mb-8">
                    We are a team of passionate developers and designers dedicated to creating the best user experiences.
                </p>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <img src="../src/assets/disdik.jpg" alt="Our Mission" className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                Our Mission
                            </h3>
                            <p className="text-gray-600">
                                To deliver top-notch solutions that help businesses grow.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <img src="../src/assets/disdik.jpg" alt="Our Vision" className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                Our Vision
                            </h3>
                            <p className="text-gray-600">
                                To be a leading provider of innovative technology solutions.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <img src="../src/assets/disdik.jpg" alt="Our Values" className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                Our Values
                            </h3>
                            <p className="text-gray-600">
                                Integrity, innovation, and customer satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 py-2 ">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <img src="../src/assets/disdik.jpg" alt="Our Team" className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                Our Team
                            </h3>
                            <p className="text-gray-600">
                                A dedicated group of professionals committed .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
