// About.jsx
import React from 'react';
import myImage from '../assets/me.jpg'; // Replace with your actual image path
import './index.css';
import BackgroundEffect from './BackgroundEffect';

const About = () => {
  return (
    <div className="block relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 gap-10 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={myImage}
            alt="About"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-lg border border-white/10"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white  bg-clip-text text-transparent animate-pulse">
            About Me
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6 mx-auto md:mx-0"></div>
          <p className="text-lg text-white/80 leading-relaxed font-light">
            I'm a passionate developer who enjoys crafting innovative digital solutions. Whether it's building interactive web experiences, designing seamless user interfaces, or exploring new technologies, I thrive on solving problems creatively and efficiently.
          </p>
          <p className="mt-6 text-lg text-white/70 leading-relaxed font-light">
            With a background in [Your Field], I specialize in blending design and technology to create elegant, scalable, and meaningful user experiences. Currently, I’m focused on expanding my knowledge in [e.g., Full-Stack Development, Cybersecurity, AI, etc.].
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
