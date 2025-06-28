import React from 'react';
import './index.css'
import BackgroundEffect from './BackgroundEffect'

const projects = [
  {
    title: 'Lost and Found Management System',
    description:
      'A full-stack web app with real-time WebSocket chat, JWT auth, smart match algorithm, and admin approval panel.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO'],
    link: 'https://yourprojectlink.com',
    image: 'https://github.blog/wp-content/uploads/2023/01/1200x640.png?resize=1200%2C640',
  },
  {
    title: 'Spotify Music Player Clone',
    description:
      'A music player built with Spotify API allowing users to browse, search, and play tracks with beautiful UI.',
    stack: ['React', 'Spotify API', 'TailwindCSS'],
    link: 'https://yourspotifyclone.com',
    image: 'https://github.blog/wp-content/uploads/2023/01/1200x640.png?resize=1200%2C640',
  },
  {
    title: 'AI GitHub Analyzer',
    description:
      'Takes GitHub repo links and generates flow diagrams and explanations using LLMs like CodeLlama.',
    stack: ['Python', 'FastAPI', 'LLM', 'Graphviz'],
    link: 'https://githubanalyzer.com',
    image: 'https://github.blog/wp-content/uploads/2023/01/1200x640.png?resize=1200%2C640',
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
