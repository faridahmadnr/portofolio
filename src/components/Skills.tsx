import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 border-t border-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-semibold tracking-widest text-white uppercase">Expertise</h2>
        <h3 className="text-3xl font-bold tracking-tight text-white">Skills & Technologies</h3>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div
            key={category.category}
            className="rounded-xl bg-neutral-950 border border-neutral-800/80 p-6 space-y-6"
          >
            <h4 className="text-base font-semibold text-white border-b border-neutral-800/80 pb-3">
              {category.category}
            </h4>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-300">{skill.name}</span>
                    <span className="text-neutral-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
