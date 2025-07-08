import React from 'react';
import './index.css'
import BackgroundEffect from './BackgroundEffect'
import InsightTube from '../assets/InsightTube.png'
import SMP from '../assets/SMP.png'
import whiteboard from '../assets/whiteboard.png'


const projects = [
  {
    title: 'InsightTube – YouTube Analytics Platform',
    description:
      'Distributed analytics platform using YouTube Data API v3 with NLP pipeline, JWT auth, rate limiting, and real-time React dashboard.',
    stack: ['React', 'FastAPI', 'MongoDB', 'JWT', 'NLP'],
    link: 'https://github.com/Satyam2016/InsightTube',
    image: InsightTube,
  },
  {
    title: 'Student Mentorship Platform',
    description:
      'Full-stack web app with real-time messaging using WebSocket (Socket.io), optimized MongoDB, and JWT authentication.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    link: 'https://github.com/Satyam2016/Student-Mentorship-Platform',
    image:  SMP,
  },
  {
    title: 'Collaborative Whiteboard',
    description:
      'Real-time collaborative drawing app with conflict resolution, Firebase persistence, and optimized canvas rendering.',
    stack: ['React', 'Firebase', 'Canvas API'],
    link: 'https://github.com/Satyam2016/Whiteboard-Canvas-Application',
    image: whiteboard,
  },
];

const Project = () => {
  return (
    <div className="block relative min-h-screen w-full bg-black text-white px-6 py-16 overflow-hidden">
       {/* Central Radiating Blob */}
      <div className="absolute inset-0 flex items-center justify-center z-[-10]">
        <div className="w-[600px] h-[600px] bg-blue-500 rounded-full blur-[200px] opacity-10 animate-spin"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black/30 p-6 rounded-3xl border border-white/10 hover:bg-black/50 transition-all duration-300 backdrop-blur-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-white/70 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-400 hover:underline transition duration-200"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
