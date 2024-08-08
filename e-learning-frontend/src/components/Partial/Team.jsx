import React from 'react';

const teamMembers = [
  {
    name: "Santi Susanti",
    role: "Back End",
    image: "../src/assets/teacher-1.png",
  },
  {
    name: "Reni Sabrina",
    role: "Design",
    image: "/mnt/data/ngajar.png",
  },
  {
    name: "Ibeng Yasin",
    role: "Front End",
    image: "/mnt/data/ngajar.png",
  },
  {
    name: "Farida Malista",
    role: "Apps Mobile",
    image: "/mnt/data/ngajar.png",
  },
];

const Team = () => {
  return (
    <section className="text-center py-10">
      <hr className="mb-8 border-gray-300 w-3/4 mx-auto" />
      <h2 className="text-3xl font-bold mb-8">Guru Pengajar</h2>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="m-4 p-6 bg-white rounded-lg shadow-md">
            <img
              src= "../src/assets/teacher-1.png"
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;


