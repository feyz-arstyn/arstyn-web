'use client'

export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Arstyn Logo"
    >
      <defs>
        <linearGradient id="ciphoriaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5F1F" />
          <stop offset="100%" stopColor="#FF3349" />
        </linearGradient>
      </defs>
      
      {/* Main C Shape - Stylized Hexagon Arrow */}
      <path
        d="M 85 20 L 40 20 L 15 50 L 40 80 L 85 80"
        stroke="url(#ciphoriaGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Central Node - The "Core" */}
      <circle
        cx="55"
        cy="50"
        r="9"
        fill="url(#ciphoriaGradient)"
      />
    </svg>
  );
}
