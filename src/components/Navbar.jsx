import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './index.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen((open) => !open)}
        className="fixed top-5 right-5 z-50 flex flex-col justify-center items-center gap-[6px] w-8 h-8 cursor-pointer md:hidden"
      >
        <span
          className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white rounded transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-white rounded transition-transform duration-300 origin-left ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 backdrop-blur-md border border-white/20 rounded-full shadow-lg bg-black/60 hidden md:flex px-8 py-1 w-full max-w-4xl justify-center text-white">
        <SlideTabs onClick={handleMenuClick} />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 left-0 z-40 backdrop-blur-md bg-black/40 flex justify-end"
          >
            <div className="w-64 max-w-full h-full bg-white/10 backdrop-blur-lg border-l border-white/30 flex flex-col p-8 gap-6 text-white">
              <SlideTabs vertical onClick={handleMenuClick} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SlideTabs = ({ vertical, onClick }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const isHorizontal = !vertical;

  // Updated tab names and section IDs
  const tabs = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];


  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative ${
        vertical
          ? "flex flex-col gap-4 text-white"
          : "flex w-fit rounded-full p-1 text-white"
      }`}
    >
      {tabs.map(({ name, id }) => (
        <Tab
          key={id}
          setPosition={setPosition}
          vertical={vertical}
          onClick={() => onClick(id)}
        >
          {name}
        </Tab>
      ))}

      {isHorizontal && <Cursor position={position} />}
    </ul>
  );
};

const Tab = ({ children, setPosition, vertical, onClick }) => {
  const ref = React.useRef(null);

  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current || vertical) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 cursor-pointer ${
        vertical
          ? "px-3 py-2 rounded-md hover:bg-white/20 transition"
          : "px-4 py-2 rounded-full"
      } text-sm md:px-5 md:py-2.5 md:text-base transition-all duration-200 mix-blend-difference`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-8 md:h-11 rounded-full bg-white/20 backdrop-blur-md pointer-events-none"
      style={{ top: 4 }}
    />
  );
};

export default Navbar;
