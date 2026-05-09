/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: '#00f5ff', dark: '#00c4cc' },
        purple: { DEFAULT: '#a855f7', dark: '#9333ea' },
        blue: { DEFAULT: '#4f8fff', dark: '#3b7de9' },
        dark: { DEFAULT: '#020617', 2: '#0a0f1e', 3: '#0f172a' },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'orbit-1': 'orbit 8s linear infinite',
        'orbit-2': 'orbit 12s linear infinite reverse',
        'orbit-3': 'orbit 16s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-2': 'float 5s ease-in-out infinite 1s',
        'float-3': 'float 3.5s ease-in-out infinite 0.5s',
        'float-4': 'float 4.5s ease-in-out infinite 1.5s',
        'blink': 'blink 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        orbit: {
          from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
          to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 245, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 245, 255, 0.7)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
