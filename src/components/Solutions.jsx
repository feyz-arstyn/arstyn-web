'use client'

import { motion } from 'framer-motion';
import { Code2, Server, Cpu, BarChart3 } from 'lucide-react';

const items = [
  {
    title: 'Frontend Engineering',
    desc: 'Accessible, responsive interfaces built with modern stacks. Performance first, pixel-perfect polish.',
    icon: Code2,
  },
  {
    title: 'Backend & APIs',
    desc: 'Robust APIs and services with best practices in security, testing, and observability.',
    icon: Server,
  },
  {
    title: 'AI-Assisted Experiences',
    desc: 'Integrate LLMs and data pipelines thoughtfully to enhance workflows without adding noise.',
    icon: Cpu,
  },
  {
    title: 'Analytics & Optimization',
    desc: 'Measure what matters. Ship with dashboards, eventing, and continuous UX performance tuning.',
    icon: BarChart3,
  },
];

export default function Solutions() {
  return (
    <section id="expertise" className="relative py-20 md:py-28">
      {/* Section header with animated underline */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Expertise</h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-white/60 via-white/30 to-transparent animate-pulse" />
          <p className="mt-4 text-white/70 text-lg">
            We bring senior-level engineering and design to ship reliable, maintainable web products on time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-6 hover:bg-white/[0.06] transition"
            >
              {/* Soft moving sheen */}
              <span
                className="pointer-events-none absolute -left-1/2 -top-1/2 h-[140%] w-[140%] rotate-12 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
                style={{
                  background:
                    'radial-gradient(40% 40% at 30% 30%, rgba(255,255,255,0.06), rgba(255,255,255,0) 60%)',
                }}
              />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="work"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white text-2xl font-semibold">A pragmatic, high-quality process</h3>
              <p className="mt-2 text-white/70 max-w-2xl">
                We start with clarity—requirements, constraints, and success metrics—then deliver in focused iterations with visible progress and tight feedback loops.
              </p>
            </div>
            <a href="mailto:hello@arstyn.com" className="rounded-full bg-white text-black px-5 py-3 font-medium hover:opacity-95 transition">Discuss your project</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
