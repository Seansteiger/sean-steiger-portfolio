
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-black">
      {/* Background radial glow to help blending */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        <div className="md:col-span-7 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl font-outfit text-white"
          >
            Hi, I'm Sean.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-outfit font-bold leading-[1.05] tracking-tight text-white max-w-xl"
          >
            I build value through <span className="text-neutral-500">marketing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-neutral-400 max-w-md leading-relaxed"
          >
            I'm a Sandton based marketer who loves building digital products and scaling brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="pt-4"
          >
            <a href="#about" className="group inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-white transition-colors duration-300 text-lg">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-5 relative flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[450px] aspect-[3/4]"
          >
            <div className="absolute inset-0 bg-neutral-900/20 rounded-[2rem] blur-2xl"></div>
            <img
              src="/sean.jpg"
              alt="Sean Steiger"
              className="blend-mask w-full h-full object-cover object-center grayscale contrast-[1.1] brightness-[0.85] transition-all duration-700"
            />
            {/* Blending Overlays */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black to-transparent"></div>
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
