// components/Education.jsx
import React from 'react';
import BackgroundEffect from './BackgroundEffect';
import Card from './Card';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'SRM University',
    duration: '2021 - 2025',
    description: 'Focused on Software Development, Cybersecurity, and Full Stack Engineering.',
  },
  {
    degree: 'Intermediate',
    institution: 'XYZ Junior College',
    duration: '2019 - 2021',
    description: 'Specialized in Math, Physics, and Computer Science.',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative w-full bg-black py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center z-[-10]">
        <div className="w-[600px] h-full bg-blue-500 rounded-full blur-[200px] opacity-10"></div>
      </div>
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 z-10 relative">
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Education
        </span>
      </h2>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {education.map((edu, idx) => (
          <Card
            key={idx}
            title={edu.degree}
            subtitle={edu.institution}
            duration={edu.duration}
            description={edu.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
