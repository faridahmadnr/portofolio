import React, { useState } from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Available for opportunities
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">{personal.name}</span>
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-neutral-300">
            {personal.role}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {personal.headline}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-sm w-full sm:w-auto"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 font-semibold text-sm hover:bg-neutral-800 transition-colors w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-neutral-400 hover:text-white text-sm transition-colors w-full sm:w-auto"
            >
              <FileText className="w-4 h-4" />
              CV
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 pt-6 text-neutral-500">
            {portfolioData.socialLinks.find((s) => s.platform === 'GitHub') && (
              <a
                href={portfolioData.socialLinks.find((s) => s.platform === 'GitHub')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {portfolioData.socialLinks.find((s) => s.platform === 'LinkedIn') && (
              <a
                href={portfolioData.socialLinks.find((s) => s.platform === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
            {portfolioData.socialLinks.find((s) => s.platform === 'Instagram') && (
              <a
                href={portfolioData.socialLinks.find((s) => s.platform === 'Instagram')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            )}
            <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border border-neutral-800 hover:border-neutral-600 transition-colors duration-300 flex items-center justify-center overflow-hidden bg-neutral-950 shadow-xl group">
          {personal.avatarUrl && !imageError ? (
            <img
              src={personal.avatarUrl}
              alt={personal.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-center p-6 space-y-2">
              <div className="w-20 h-20 mx-auto rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-3xl font-bold text-white">
                FA
              </div>
              <p className="font-semibold text-white text-sm pt-2">{personal.name}</p>
              <p className="text-xs text-neutral-500">{personal.location}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
