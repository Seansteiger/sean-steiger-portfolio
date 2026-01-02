
import React from 'react';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-neutral-900 to-black rounded-[3rem] p-8 md:p-16 border border-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Mail className="w-64 h-64" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-outfit font-bold text-white leading-tight">
                Ready to take <br/>your brand to <br/><span className="text-indigo-500">the next level?</span>
              </h2>
              <p className="text-neutral-400 text-lg">
                Let's discuss how we can scale your digital presence together. I'm currently taking on new clients for Q3 & Q4.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: <Instagram className="w-5 h-5"/>, link: "#" },
                  { icon: <Linkedin className="w-5 h-5"/>, link: "#" },
                  { icon: <Twitter className="w-5 h-5"/>, link: "#" },
                  { icon: <Mail className="w-5 h-5"/>, link: "mailto:hello@seansteiger.com" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:scale-110 transition-all border border-neutral-700"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800/30 p-8 rounded-3xl border border-neutral-700/50 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase">Message</label>
                  <textarea rows={4} placeholder="Tell me about your project..." className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"></textarea>
                </div>
                <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-indigo-500 hover:text-white transition-all transform active:scale-95 shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
