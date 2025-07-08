// components/Experience.jsx
import React from 'react';
import BackgroundEffect from './BackgroundEffect';
import Card from './Card';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Tech Innovators Inc.',
    duration: 'Jan 2023 - Jun 2023',
    description: 'Built scalable web apps using React & Node.js. Improved UI performance by 30%.',
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Solutions',
    duration: 'Jul 2023 - Dec 2023',
    description: 'Created responsive UIs with Tailwind CSS and React. Integrated dynamic APIs.',
  },
  {
    role: 'Full Stack Developer',
    company: 'NextGen Systems',
    duration: 'Jan 2024 - Present',
    description: 'Leading end-to-end feature development with React, Express.js & MongoDB.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="block relative w-full min-h-screen bg-black py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center z-[-10]">
        <div className="w-[600px] h-full bg-blue-500 rounded-full blur-[200px] opacity-10"></div>
      </div>
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 z-10 relative">
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Work Experience
        </span>
      </h2>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            title={exp.role}
            subtitle={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
