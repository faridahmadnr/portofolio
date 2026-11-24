import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 py-8 bg-neutral-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};
