export default function AmbientBeams() {
  return (
    <>
      {/* Warm accent beam - top left */}
      <div
        className="pointer-events-none fixed -left-1/4 top-1/4 h-[55vh] w-[70vw] opacity-[0.08] blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,95,31,0.4) 0%, rgba(255,51,73,0.3) 30%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Cool accent beam - bottom right */}
      <div
        className="pointer-events-none fixed right-[-20%] top-[55%] h-[45vh] w-[60vw] opacity-[0.08] blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(34,211,238,0.35) 0%, rgba(139,92,246,0.25) 40%, rgba(0,0,0,0) 70%)',
        }}
      />
    </>
  );
}
