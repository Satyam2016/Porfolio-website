// About.jsx
import React from 'react';
import myImage from '../assets/me3.jpg'; 
import './index.css';
import BackgroundEffect from './BackgroundEffect';

const About = () => {
  return (
    <div className="block relative min-h-screen w-full bg-black text-white overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 gap-10 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={myImage}
            alt="About"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-lg border border-white/10"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white  bg-clip-text text-transparent animate-pulse">
            About Me
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6 mx-auto md:mx-0"></div>
          <p className="text-xl text-white/80 leading-relaxed font-light">
            I am a final-year undergraduate student at SRM University AP, pursuing a B.Tech in Computer Science and Engineering.
            I’m a self-driven, quick learner and passionate programmer with a curious mind, who enjoys solving complex and challenging real-world problems.
            I always strive to give 100% to everything I do. I have experience working on full-stack projects, including the integration of AI/ML technologies.
          </p>

          <p className="text-xl text-white/80 leading-relaxed font-light">
            With a strong foundation in data structures, algorithms, and system design, I aim to deliver high-quality and efficient solutions in every project I undertake.
          </p>

          <p className="text-xl text-white/80 leading-relaxed font-light">
            I’m always eager to learn, grow, and take on new challenges that help me become a better engineer and problem solver.
          </p>


        </div>
      </div>
    </div>
  );
};

export default About;
