import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const marqueeTech = [
    'FastAPI',
    'React.js',
    'Python',
    'PostgreSQL',
    'Docker',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Linux VPS',
    'IoT Telemetry',
    'Laravel',
    'Git / GitHub',
    'Figma',
    'REST APIs',
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 border-t border-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-semibold tracking-widest text-white uppercase">Expertise</h2>
        <h3 className="text-3xl font-bold tracking-tight text-white">Skills & Technologies</h3>
        <p className="text-sm text-neutral-400">
          Alat dan teknologi yang saya gunakan dalam membangun sistem backend, IoT, dan aplikasi web modern.
        </p>
      </div>

      {/* Infinite Horizontal Running Marquee */}
      <div className="relative mt-10 overflow-hidden py-3 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent">
        <div className="animate-marquee flex items-center gap-3">
          {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-300 text-xs font-mono whitespace-nowrap hover:border-neutral-500 hover:text-white transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid with Animated Fill */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div
            key={category.category}
            className="rounded-xl bg-neutral-950 border border-neutral-800/80 p-6 space-y-6 hover:border-neutral-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/40 group"
          >
            <h4 className="text-base font-semibold text-white border-b border-neutral-800/80 pb-3 flex items-center justify-between">
              <span>{category.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors"></span>
            </h4>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-neutral-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                      }}
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
