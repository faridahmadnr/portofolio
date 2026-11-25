import React from "react";
import { Briefcase } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      className="py-20 border-t border-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-semibold tracking-widest text-white uppercase">
          Career
        </h2>
        <h3 className="text-3xl font-bold tracking-tight text-white">
          Experience & Background
        </h3>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, idx) => {
          const cardClassName =
            "flex gap-4 p-6 rounded-xl bg-neutral-950 border border-neutral-800/80";
          const content = (
            <>
              <div className="mt-1 p-2 h-fit rounded-lg bg-neutral-900 text-white border border-neutral-800">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-semibold text-white">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-mono text-neutral-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-300">
                  {exp.company}
                </p>
                <p className="text-sm text-neutral-400 pt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </>
          );

          return exp.href ? (
            <a
              key={idx}
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClassName} hover:border-neutral-700 transition-colors`}
            >
              {content}
            </a>
          ) : (
            <div key={idx} className={cardClassName}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};
