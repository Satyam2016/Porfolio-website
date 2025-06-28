import React from 'react';
import './index.css'
import BackgroundEffect from './BackgroundEffect';

const Contact = () => {
  return (
    <div className="block relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
        {/* Central Radiating Blob */}
      <div className="absolute inset-0 flex items-center justify-center z-[-10]">
        <div className="w-[600px] h-[600px] bg-blue-500 rounded-full blur-[200px] opacity-10 animate-spin"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>


      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
          Contact Me
        </span>
      </h2>

      <form className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-sm mb-2 text-white/70">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/10 px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-white/70">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full bg-white/10 px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-white/70">Message</label>
          <textarea
            rows="5"
            placeholder="Type your message..."
            className="w-full bg-white/10 px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-white/50 mt-20 text-sm">
        © {new Date().getFullYear()} Satyam Kumar. All rights reserved.
      </p>

    </div>
  );
};

export default Contact;
