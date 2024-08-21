import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const narratives = [
    {
      title: 'Our Mission',
      content: 'We are dedicated to providing quality education and resources to learners everywhere. Our mission is to make learning accessible and engaging through innovative solutions.',
      imgSrc: '../src/assets/blog-1.jpg', // Replace with your image URL
    },
    {
      title: 'Our Vision',
      content: 'Our vision is to be a leading provider of educational technology solutions that empower learners and educators globally. We strive to create a future where education is inclusive and effective.',
      imgSrc: '../src/assets/hero-1.jpg', // Replace with your image URL
    },
    {
      title: 'Our Values',
      content: 'Integrity, innovation, and inclusivity are at the core of our values. We believe in fostering a culture of honesty, creativity, and respect for all individuals.',
      imgSrc: '../src/assets/Disdik.jpg', // Replace with your image URL
    },
  ];

  return (
    <section className="min-h-screen w-full bg-white-100 flex items-center justify-center py-6">
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black-300 mb-6">About Us</h1>
        <div className="w-16 border-t-2 bg-gray-200 mb-6 mx-auto"></div>
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <AnimatePresence>
              <motion.img
                src={narratives[activeTab].imgSrc}
                alt={narratives[activeTab].title}
                className="w-full h-auto max-w-full md:max-w-md rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">{narratives[activeTab].title}</h3>
            <p className="text-gray-700 mb-6 text-center md:text-left">{narratives[activeTab].content}</p>
            <div className="flex flex-wrap justify-center space-x-4">
              {narratives.map((narrative, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md border-2 ${
                    activeTab === index
                      ? 'bg-gray-300 text-white border-gray-200-500'
                      : 'bg-white text-gray-500 border-gray-500'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {narrative.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
