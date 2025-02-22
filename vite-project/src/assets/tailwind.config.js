/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#4f46e5',
        secondary: '#06b6d4',
        background: '#f5f7fa',
        card: '#ffffff',
        darkCard: '#1f2937',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        smooth: '1rem',
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
};
