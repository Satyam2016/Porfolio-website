import React from 'react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Tech Innovators Inc.',
    duration: 'Jan 2023 - Jun 2023',
    description:
      'Built scalable web apps using React & Node.js. Improved UI performance by 30%.',
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Solutions',
    duration: 'Jul 2023 - Dec 2023',
    description:
      'Created responsive UIs with Tailwind CSS and React. Integrated dynamic APIs.',
  },
  {
    role: 'Full Stack Developer',
    company: 'NextGen Systems',
    duration: 'Jan 2024 - Present',
    description:
      'Leading end-to-end feature development with React, Express.js & MongoDB.',
  },
];

const Experience = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 py-20 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-blue-600 via-indigo-700 to-transparent opacity-25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-indigo-600 via-blue-600 to-transparent opacity-20 blur-3xl rounded-full"></div>
      </div>

      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline line */}
        <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-400 rounded shadow-[0_0_15px_2px_rgba(96,165,250,0.7)]"></div>

        <ul className="space-y-20 relative">
          {experiences.map(({ role, company, duration, description }, idx) => (
            <li key={idx} className="relative pl-28">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-3 w-8 h-8 rounded-full bg-blue-500 border-4 border-black shadow-lg animate-pulse"></div>

              {/* Content Box */}
              <div className="bg-black/30 rounded-3xl p-8 backdrop-blur-md hover:bg-black/60 transition duration-300 shadow-md">
                <h3 className="text-2xl font-semibold mb-1">{role}</h3>
                <p className="text-blue-400 font-medium mb-2">{company}</p>
                <p className="text-sm text-white/70 italic mb-4">{duration}</p>
                <p className="text-white/80 leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Custom gradient radial utility */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Experience;
