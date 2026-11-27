import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  FolderGit2,
  X,
  Users,
  CheckCircle2,
  Key,
  FileText,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Layers,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData, Project } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [demoProject, setDemoProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;
  const remainingCount = projects.length - INITIAL_COUNT;

  // Close modal on ESC key (prioritize top-most demo modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (demoProject) {
          setDemoProject(null);
        } else {
          setSelectedProject(null);
        }
      }
    };

    if (selectedProject || demoProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, demoProject]);

  return (
    <section id="projects" className="py-20 border-t border-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-semibold tracking-widest text-white uppercase">Portfolio</h2>
        <h3 className="text-3xl font-bold tracking-tight text-white">Featured Projects</h3>
        <p className="text-sm text-neutral-400">
          Klik pada kartu proyek untuk melihat detail peran, kontribusi, dokumentasi, dan akses demo.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col justify-between rounded-xl bg-neutral-950 border border-neutral-800/80 p-6 hover:border-neutral-600 transition-all duration-200 cursor-pointer hover:shadow-xl hover:shadow-neutral-950/50"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2.5 rounded-lg bg-neutral-900 text-white group-hover:bg-neutral-800 transition-colors">
                    <FolderGit2 className="w-5 h-5 text-white" />
                  </div>
                  {project.role && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300">
                      {project.role}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 sm:gap-2 text-neutral-400" onClick={(e) => e.stopPropagation()}>
                  {project.deckUrl && (
                    <a
                      href={project.deckUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 -m-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                      aria-label="Slide Deck"
                      title="Slide Deck"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 -m-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                      aria-label="GitHub Repository"
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    project.embedInModal ? (
                      <button
                        type="button"
                        onClick={() => setDemoProject(project)}
                        className="p-2 -m-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
                        aria-label="Buka Demo Popup"
                        title="Buka Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 -m-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )
                  )}
                </div>
              </div>

              <div>
                {project.subtitle && (
                  <p className="text-xs font-mono text-neutral-500 mb-1">
                    {project.subtitle}
                  </p>
                )}
                <h4 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900 space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-neutral-900 text-neutral-300 border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                <span>{project.teamSize || 'Detail Proyek'}</span>
                <span className="inline-flex items-center gap-1 font-medium text-white group-hover:translate-x-1 transition-transform">
                  Lihat Detail <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Toggle Button */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 hover:bg-neutral-800/80 transition-all text-xs font-mono font-medium shadow-lg shadow-black/40 cursor-pointer"
          >
            {showAll ? (
              <>
                <span>Tampilkan Lebih Sedikit</span>
                <ChevronUp className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                <span>Lihat Semua Proyek ({remainingCount} Lainnya)</span>
                <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-800 pb-5">
              <div className="space-y-1.5">
                {selectedProject.subtitle && (
                  <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-neutral-900 text-neutral-300 border border-neutral-700">
                    {selectedProject.subtitle}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Meta Tags: Role & Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-sm">
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Layers className="w-4 h-4 text-white shrink-0" />
                <div>
                  <span className="block text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Peran / Role</span>
                  <span className="font-medium text-white">{selectedProject.role || 'Contributor'}</span>
                </div>
              </div>

              {selectedProject.teamSize && (
                <div className="flex items-center gap-2.5 text-neutral-300 border-t sm:border-t-0 sm:border-l border-neutral-800 pt-2 sm:pt-0 sm:pl-3">
                  <Users className="w-4 h-4 text-white shrink-0" />
                  <div>
                    <span className="block text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Struktur Tim</span>
                    <span className="font-medium text-white">{selectedProject.teamSize}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Long Description */}
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Ringkasan Proyek
              </h5>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Key Contributions */}
            {selectedProject.keyContributions && selectedProject.keyContributions.length > 0 && (
              <div className="space-y-3">
                <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Kontribusi Utama & Tanggung Jawab
                </h5>
                <ul className="space-y-2.5">
                  {selectedProject.keyContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Demo Credentials Box */}
            {selectedProject.demoCredentials && selectedProject.demoCredentials.length > 0 && (
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <Key className="w-4 h-4 text-white" />
                  <span>Akses Akun Demo (Quick Login / Test Access)</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Gunakan kredensial pengujian berikut untuk mencoba hak akses multi-role pada live demo:
                </p>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {selectedProject.demoCredentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80 text-xs gap-1 sm:gap-4"
                    >
                      <span className="font-semibold text-white">{cred.role}</span>
                      <div className="flex flex-wrap items-center gap-3 font-mono text-neutral-400">
                        <span>Email: <span className="text-neutral-200">{cred.email}</span></span>
                        <span>Pass: <span className="text-neutral-200">{cred.pass}</span></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Teknologi & Tools
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-neutral-900 text-neutral-300 border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl && (
                selectedProject.embedInModal ? (
                  <button
                    type="button"
                    onClick={() => setDemoProject(selectedProject)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Buka Live Demo
                  </button>
                ) : (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-neutral-900 font-semibold text-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Buka Live Demo
                  </a>
                )
              )}
              {selectedProject.deckUrl && (
                <a
                  href={selectedProject.deckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors w-full sm:w-auto"
                >
                  <FileText className="w-4 h-4" />
                  Lihat Slide Deck (PDF)
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-neutral-400 hover:text-white text-sm transition-colors w-full sm:w-auto"
                >
                  <GithubIcon className="w-4 h-4" />
                  Lihat Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Embedded Live Demo Modal */}
      {demoProject && demoProject.liveUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Live Demo ${demoProject.title}`}
          className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setDemoProject(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[88dvh] sm:h-[85vh] flex flex-col bg-neutral-950 border border-neutral-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-5 sm:py-3.5 border-b border-neutral-800 bg-neutral-950 shrink-0">
              <div className="min-w-0">
                {demoProject.subtitle && (
                  <p className="text-[10px] sm:text-xs font-mono text-neutral-400 truncate">
                    {demoProject.subtitle}
                  </p>
                )}
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {demoProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <a
                  href={demoProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
                  title="Buka di Tab Baru"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tab Baru</span>
                </a>
                <button
                  type="button"
                  onClick={() => setDemoProject(null)}
                  className="p-1.5 sm:p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none transition-colors cursor-pointer"
                  aria-label="Tutup demo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <iframe
              src={demoProject.liveUrl}
              title={demoProject.title}
              className="w-full flex-1 border-0 bg-black"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      )}
    </section>
  );
};
