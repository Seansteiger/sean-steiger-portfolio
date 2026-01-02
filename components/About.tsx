
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateBio } from '../services/gemini';

const About: React.FC = () => {
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBio = async () => {
      const b = await generateBio("Sean Steiger", 26, "Sandton, South Africa");
      setBio(b);
      setIsLoading(false);
    };
    fetchBio();
  }, []);

  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
             <motion.span 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-600 block"
             >
               Profile
             </motion.span>
          </div>
          <div className="md:col-span-8 space-y-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-outfit font-bold text-white leading-tight"
            >
              A 26-year-old marketing professional with a passion for digital evolution.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-neutral-400 leading-relaxed max-w-2xl font-light"
            >
              {isLoading ? (
                <div className="space-y-4">
                  <div className="h-5 bg-neutral-900 rounded w-full animate-pulse"></div>
                  <div className="h-5 bg-neutral-900 rounded w-5/6 animate-pulse"></div>
                  <div className="h-5 bg-neutral-900 rounded w-4/6 animate-pulse"></div>
                </div>
              ) : (
                <p className="border-l-2 border-indigo-500/30 pl-8 py-2">
                  {bio}
                </p>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-16 pt-8"
            >
              <div>
                <p className="text-white font-bold tracking-widest uppercase text-xs mb-2">Location</p>
                <p className="text-neutral-500 text-lg">Sandton, Johannesburg</p>
              </div>
              <div>
                <p className="text-white font-bold tracking-widest uppercase text-xs mb-2">Expertise</p>
                <p className="text-neutral-500 text-lg">Social Architecture</p>
              </div>
              <div>
                <p className="text-white font-bold tracking-widest uppercase text-xs mb-2">Focus</p>
                <p className="text-neutral-500 text-lg">High-End Scaling</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
