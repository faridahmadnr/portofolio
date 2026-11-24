import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 border-t border-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-semibold tracking-widest text-white uppercase">Profile</h2>
        <h3 className="text-3xl font-bold tracking-tight text-white">About Me</h3>
      </div>

      <div className="mt-12 max-w-3xl mx-auto rounded-xl bg-neutral-950 border border-neutral-800/80 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-neutral-800 text-xs text-neutral-400 font-mono">
          <Terminal className="w-4 h-4 text-white" />
          <span>farid@dev:~/about</span>
        </div>
        <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
          {personal.about}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-neutral-800/80 text-sm">
          <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-neutral-900/50 sm:bg-transparent">
            <span className="text-neutral-500 block text-xs">Role</span>
            <span className="text-neutral-200 font-medium">{personal.role}</span>
          </div>
          <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-neutral-900/50 sm:bg-transparent">
            <span className="text-neutral-500 block text-xs">Location</span>
            <span className="text-neutral-200 font-medium">{personal.location}</span>
          </div>
          <div className="p-3 sm:p-0 rounded-lg sm:rounded-none bg-neutral-900/50 sm:bg-transparent">
            <span className="text-neutral-500 block text-xs">Focus</span>
            <span className="text-neutral-200 font-medium">Backend & Frontend</span>
          </div>
        </div>
      </div>
    </section>
  );
};
