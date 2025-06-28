import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGit, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiExpress } from 'react-icons/si';
import './index.css'
import BackgroundEffect from './BackgroundEffect';

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
    <div className="block relative min-h-screen w-full bg-black overflow-hidden">
      {/* Central Radiating Blob */}
      <div className="absolute inset-0 flex items-center justify-center z-[-10]">
        <div className="w-[600px] h-[600px] bg-blue-500 rounded-full blur-[200px] opacity-10 animate-spin"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      {/* Content */}
      <div className=" relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20">
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

    </div>
  );
};

export default Skills;
