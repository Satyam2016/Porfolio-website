import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaGithub,
  FaLinkedin,
  FaCode
} from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';
import { MdOutlineSimCardDownload } from "react-icons/md";
import './index.css'

const HeroSection = () => {
  return (
    <div className=" relative min-h-screen w-full overflow-hidden bg-black">

      {/* Infinity Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <span className="text-[800px] sm:text-[1000px] md:text-[1200px] text-blue-500/10 font-bold animate-pulse select-none">∞</span>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-float" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 text-white text-center">
        <div className="p-6 sm:p-10 md:p-16 max-w-2xl sm:max-w-3xl md:max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Satyam Kumar
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-6 font-light">
            <Typewriter
              words={[
                'Creative Developer',
                'Full-Stack Enthusiast',
                'Problem Solver',
                'Tech Explorer',
                'Code Artist'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 font-light max-w-2xl mx-auto">
            Crafting infinite digital experiences with passion and precision. Where creativity meets technology in perfect harmony.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>

            <a
              href="#about"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Resume <MdOutlineSimCardDownload className="text-lg" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 text-white mt-4 sm:mt-6">
            {[
              {
                name: 'GitHub',
                icon: <FaGithub />,
                url: 'https://github.com/Satyam2016',
                hover: 'group-hover:text-gray-300'
              },
              {
                name: 'LinkedIn',
                icon: <FaLinkedin />,
                url: 'https://www.linkedin.com/in/satyam-kumar-7361661b3/',
                hover: 'group-hover:text-blue-400'
              },
              {
                name: 'LeetCode',
                icon: <SiLeetcode />,
                url: 'https://leetcode.com/u/satyam_kumar_79/',
                hover: 'group-hover:text-yellow-400'
              },
              {
                name: 'CodeChef',
                icon: <SiCodechef />,
                url: 'https://www.codechef.com/users/bask_violet_39',
                hover: 'group-hover:text-orange-300'
              },
              {
                name: 'Codeforces',
                icon: <SiCodeforces />,
                url: 'https://codeforces.com/profile/satyam_79',
                hover: 'group-hover:text-purple-300'
              }
            ].map(({ name, icon, url, hover }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <span className={`text-2xl transition-transform duration-300 group-hover:scale-110 drop-shadow-md ${hover}`}>
                  {icon}
                </span>
                <span className="mt-2 text-sm opacity-70 group-hover:opacity-100 transition duration-300">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
