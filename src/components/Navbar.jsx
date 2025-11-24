'use client'

import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="text-white font-semibold tracking-tight">Arstyn</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#expertise" className="hover:text-white transition">Expertise</a>
          <a href="#work" className="hover:text-white transition">Approach</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href="mailto:hello@arstyn.com"
            className="rounded-full bg-white text-black px-4 py-2 font-medium hover:opacity-90 transition"
          >
            Start a project
          </a>
        </nav>
      </div>
      {/* Animated underline for a premium feel */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
    </header>
  );
}
