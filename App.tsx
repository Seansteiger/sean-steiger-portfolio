
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Services from './components/Services';
import WorkGrid from './components/WorkGrid';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-neutral-300 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Services />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      
      <footer className="py-12 bg-black border-t border-neutral-900/50">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} Sean Steiger • Sandton, ZA
          </p>
          <div className="flex gap-8 text-neutral-500 text-xs font-medium tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Archive</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
