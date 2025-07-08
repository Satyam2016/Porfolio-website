import React, { useState } from 'react';
import './index.css';
import BackgroundEffect from './BackgroundEffect';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }

    setLoading(false);
  };

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

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-2xl mx-auto space-y-6"
      >
        <input type="hidden" name="access_key" value="b9873819-2d9d-4ce0-b3fb-8eedaf494919" />

        <div>
          <label className="block text-sm mb-2 text-white/70">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-white/10 px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-white/70">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full bg-white/10 px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-white/70">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Type your message..."
            className="w-full bg-white/10 px-4 py-3 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* ✅ Success Popup */}
      {success && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl max-w-sm text-center">
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-sm mb-4">Thank you for contacting me. I’ll get back to you soon.</p>
            <button
              onClick={() => setSuccess(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <p className="text-center text-white/50 mt-20 text-sm">
        © {new Date().getFullYear()} Satyam Kumar. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
