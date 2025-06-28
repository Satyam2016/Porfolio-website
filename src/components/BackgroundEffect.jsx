import React from 'react';
import './BackgroundEffect.css';

const BackgroundEffect = () => {
  return (
    <>
      {/* Floating Dots */}
<div className="absolute inset-0 z-0 opacity-30">
  {Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 8 + 4; // Size between 4px and 12px
    return (
      <div
        key={i}
        className={`absolute ${
          i % 2 === 0 ? 'bg-blue-400' : 'bg-cyan-400'
        } animate-float-${i % 3}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          borderRadius: '50%',
        }}
      ></div>
    );
  })}
</div>


   {/* Grid Overlay */}
<div className="absolute inset-0 z-0 opacity-5">
  <div
    className="w-full h-full"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.325) 0.5px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.325) 0.5px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }}
  ></div>
</div>


      {/* Animated Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
    </>
  );
};

export default BackgroundEffect;
