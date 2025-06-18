import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Infinity symbol background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[1200px] text-blue-500/10 font-bold animate-pulse select-none">
          ∞
        </span>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-float"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8">
        <div className="text-center rounded-3xl p-16 max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          <div className="mb-12">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-4xl text-blue-200 font-light tracking-wide opacity-90">
              Creative Developer
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Crafting infinite digital experiences with passion and precision.
            Where creativity meets technology in perfect harmony.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Custom animations and glow */}
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
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
