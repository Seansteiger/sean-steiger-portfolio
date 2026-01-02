
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Blog', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-sm py-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="flex gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
