// components/Education.jsx
import React from 'react';
import BackgroundEffect from './BackgroundEffect';
import Card from './Card';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'SRM University, Andhra Pradesh',
    duration: 'Oct 2022 - May 2026',
    description: 'Focused on Data Structures, System Design, Distributed Systems, and Full Stack Development. CGPA: 8.75/10',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'VidyaGyan Leadership Academy, Sitapur, UP',
    duration: 'Apr 2020 - May 2022',
    description: 'Specialized in Mathematics, Physics, and Computer Science. Scored 94%.',
  },
];


const Education = () => {
  return (
    <section id="education" className=" block relative w-full bg-black py-20 overflow-hidden min-h-screen">
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
