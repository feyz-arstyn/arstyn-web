import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/70">
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-white text-xl font-semibold">Arstyn</h3>
            <p className="mt-1 text-white/60">Clean, performant web development — built with care.</p>
          </div>
          <a
            href="mailto:hello@arstyn.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            <Mail className="h-4 w-4" /> hello@arstyn.com
          </a>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Arstyn, Inc.</div>
      </div>
    </footer>
  );
}
