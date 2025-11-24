import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Footer from '@/components/Footer';
import AmbientBeams from '@/components/AmbientBeams';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Cohesive animated ambience across the site */}
      <AmbientBeams />

      {/* Subtle background grid for texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />

      <Navbar />
      <main>
        <Hero />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}

