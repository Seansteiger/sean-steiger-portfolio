
import React from 'react';
import { motion } from 'framer-motion';

const WhatIDo: React.FC = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-outfit font-bold text-white">What I do</h2>
          <a href="#work" className="group inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-white transition-colors duration-300">
            View selected work
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Strategic Scaling",
              desc: "Implementing data-driven ecosystems that turn social attention into measurable business growth and revenue."
            },
            {
              title: "Content Ecosystems",
              desc: "Developing high-quality content pillars that build brand authority and deep audience trust across all platforms."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-10 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 hover:border-indigo-500/30 hover:bg-neutral-900/60 transition-all duration-500 group"
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-outfit group-hover:text-indigo-400 transition-colors">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
