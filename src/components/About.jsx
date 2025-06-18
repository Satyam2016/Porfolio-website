import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden text-white">
     

      {/* Animated floating dots */}
      <div className="absolute inset-0 z-10 opacity-30">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-${(i % 3) + 2} h-${(i % 3) + 2} rounded-full ${
              i % 2 === 0 ? 'bg-blue-400' : 'bg-cyan-400'
            } animate-float-${i % 3}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 4px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 4px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-8   transition-all duration-1000">
        <div className="text-center rounded-3xl p-12 max-w-4xl backdrop-blur-md">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
            I'm a passionate developer who enjoys crafting innovative digital solutions. Whether it's building interactive web experiences, designing seamless user interfaces, or exploring new technologies, I thrive on solving problems creatively and efficiently.
          </p>

          <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed font-light">
            With a background in [Your Field], I specialize in blending design and technology to create elegant, scalable, and meaningful user experiences. Currently, I’m focused on expanding my knowledge in [e.g., Full-Stack Development, Cybersecurity, AI, etc.].
          </p>
        </div>
      </div>

      {/* Animations & styles */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float-0 {
          animation: float-0 6s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }

        .blob {
          position: absolute;
          border-radius: 9999px;
          opacity: 0.3;
          filter: blur(120px);
          animation: move 20s ease-in-out infinite alternate;
        }

        .blob1 {
          width: 600px;
          height: 600px;
          top: 20%;
          left: 15%;
          background: radial-gradient(circle at center, #6366f1, transparent);
        }

        .blob2 {
          width: 700px;
          height: 700px;
          top: 10%;
          right: 10%;
          background: radial-gradient(circle at center, #3b82f6, transparent);
        }

        .blob3 {
          width: 500px;
          height: 500px;
          bottom: 20%;
          left: 25%;
          background: radial-gradient(circle at center, #06b6d4, transparent);
        }

        .blob4 {
          width: 600px;
          height: 600px;
          bottom: 10%;
          right: 20%;
          background: radial-gradient(circle at center, #0ea5e9, transparent);
        }

        @keyframes move {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -20px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default About;
