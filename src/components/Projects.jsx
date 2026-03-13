'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Wasltap',
    description: 'A premium NFC-powered digital business card platform. Sustainable, high-performance technology for instant professional networking.',
    image: '/works/wasltap.png',
    link: 'https://wasltap.com',
    tags: ['Product Design', 'Next.js', 'Digital Branding'],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Recent Work</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            A selection of projects where engineering meets thoughtful design to solve real challenges.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group flex flex-col h-full bg-white/[0.015] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/[0.03] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay Sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Project Badge */}
                <div className="absolute top-6 right-6">
                   <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                   <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-white/50 border border-white/[0.05]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed mb-auto">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors duration-300">
                  <span>View Project</span>
                  <div className="h-px w-0 bg-white group-hover:w-8 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col h-full bg-white/[0.005] border border-white/10 border-dashed rounded-3xl p-8 items-center justify-center min-h-[400px]"
          >
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 mb-6 text-white/20">
                <ExternalLink className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-white/50 mb-2">More projects incoming</h3>
              <p className="text-white/30 text-sm max-w-[200px] mx-auto">
                We're currently polishing more case studies to show you what we're working on.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
