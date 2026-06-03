/** @type {import('tailwindcss').Config} */
// Industrial / engineering theme — steel-blue + amber accents, technical type.
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary accent — steel blue (cool, technical)
        steel: {
          50:  '#eef3f8',
          100: '#d6e2ee',
          200: '#aec6dd',
          300: '#7fa3c4',
          400: '#5582ab',
          500: '#3e6e9c',     // primary accent
          600: '#335a82',
          700: '#2b4a6a',
          800: '#243c56',
          900: '#1f3247',
          950: '#131f2d',
        },
        // Secondary accent — amber (warning-tape / hazard highlight)
        hazard: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        ink: '#0b0e12',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { content: '1140px' },
      borderRadius: { none: '0', sm: '2px', DEFAULT: '3px' },
    },
  },
  plugins: [],
};
