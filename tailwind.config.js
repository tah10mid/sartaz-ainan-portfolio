/** @type {import('tailwindcss').Config} */
// Tailwind config for the COMPILED build (Tailwind CLI v3).
// Mirrors the palette/fonts that were previously set on the Play CDN.
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Refined lavender/violet pulled from the lavender shirt
        lavender: {
          50:  '#f5f3fa',
          100: '#ebe7f4',
          200: '#d8d0e9',
          300: '#bdaedb',
          400: '#a08bc9',
          500: '#8B7BB8', // accent
          600: '#7766a3',
          700: '#635486',
          800: '#52466e',
          900: '#443b5b',
        },
        ink: '#111111',
      },
      fontFamily: {
        serif: ['Fraunces', 'Lora', 'Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1100px' },
    },
  },
  plugins: [],
};
