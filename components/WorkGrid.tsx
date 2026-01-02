
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-4">Case Studies</h2>
          <p className="text-neutral-400 max-w-md">Transforming visions into high-performing digital realities for clients across South Africa.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-neutral-900/50 border border-neutral-800/50"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="inline-block px-4 py-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] text-white uppercase tracking-[0.2em] font-bold mb-4">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-3 font-outfit">{project.title}</h3>
                <p className="text-neutral-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-12 py-5 border border-neutral-800 text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest uppercase">
            View Full Archive
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkGrid;
