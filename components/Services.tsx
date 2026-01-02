
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white">Core Marketing <br/>Capabilities</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-neutral-400 max-w-sm text-lg"
          >
            I specialize in bridging the gap between brand identity and consumer behavior in the digital space.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-10 bg-neutral-900/40 border border-neutral-800/60 rounded-[2rem] hover:border-indigo-500/40 hover:bg-neutral-900/80 transition-all duration-500 relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-neutral-800/80 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500 border border-neutral-700/50">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 font-outfit">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-md font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
