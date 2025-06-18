import React from 'react';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-indigo-500 via-purple-500 to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-500 via-cyan-500 to-transparent opacity-20 blur-3xl"></div>
      </div>

      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
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
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Contact;
