// components/Card.jsx
import React from 'react';

const Card = ({ title, subtitle, duration, description }) => (
  <div className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 my-6 transition hover:shadow-xl hover:bg-white/10">
    <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
    <p className="text-blue-400 font-medium mb-1">{subtitle}</p>
    <p className="text-sm text-white/70 italic mb-3">{duration}</p>
    <p className="text-white/80 text-sm leading-relaxed">{description}</p>
  </div>
);

export default Card;
