import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold text-lg tracking-tight text-white hover:text-neutral-300 transition-colors">
          <Code2 className="w-5 h-5 text-white" />
          <span>{portfolioData.personal.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personal.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3.5 py-1.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-200 transition-colors"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-background/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={portfolioData.personal.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};
