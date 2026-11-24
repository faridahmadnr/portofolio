import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-900 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-xs font-semibold tracking-widest text-white uppercase">Contact</h2>
        <h3 className="text-3xl font-bold tracking-tight text-white">Get In Touch</h3>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-white">Let's Work Together</h4>
          <p className="text-neutral-400 text-sm leading-relaxed">
            I'm always open to discussing new projects, technical challenges, or full-time opportunities.
            Feel free to reach out directly through email or the contact form.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-neutral-300 text-sm">
              <div className="p-2.5 rounded-lg bg-neutral-900 text-white">
                <Mail className="w-4 h-4" />
              </div>
              <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
                {personal.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-neutral-300 text-sm">
              <div className="p-2.5 rounded-lg bg-neutral-900 text-white">
                <Phone className="w-4 h-4" />
              </div>
              <span>{personal.phone}</span>
            </div>

            <div className="flex items-center gap-3 text-neutral-300 text-sm">
              <div className="p-2.5 rounded-lg bg-neutral-900 text-white">
                <MapPin className="w-4 h-4" />
              </div>
              <span>{personal.location}</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-neutral-950 border border-neutral-800/80 p-6 sm:p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
              <CheckCircle2 className="w-12 h-12 text-emerald-400" />
              <h5 className="text-lg font-bold text-white">Thank you!</h5>
              <p className="text-sm text-neutral-400">Your message has been recorded. I'll get back to you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 text-neutral-300 hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-neutral-900 text-sm font-semibold transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
