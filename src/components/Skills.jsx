import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGit, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiExpress } from 'react-icons/si';

const skillData = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
];

const Skills = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl bg-gradient-radial from-indigo-500 via-blue-600 to-transparent"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl bg-gradient-radial from-cyan-500 via-blue-400 to-transparent"></div>
      </div>

      {/* Glowing Grid */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
          {skillData.map((skill, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 text-white text-center font-medium shadow-xl backdrop-blur-md transition transform hover:scale-105 hover:shadow-blue-400/30 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition duration-500"></div>
              <div className="text-3xl mb-2 float-icon">{skill.icon}</div>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .float-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
