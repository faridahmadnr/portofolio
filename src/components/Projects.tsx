import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 border-t border-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-semibold tracking-widest text-white uppercase">Portfolio</h2>
        <h3 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h3>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-xl bg-neutral-950 border border-neutral-800/80 p-6 hover:border-neutral-700 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-neutral-900 text-white">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-neutral-900 text-neutral-300 border border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
