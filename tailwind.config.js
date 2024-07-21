// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure Tailwind scans files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        mcdRed: '#FF0000',
        mcdYellow: '#FFC72C',
        mcdWhite: '#FFFFFF',
        mcdGray: '#333333',
        mcdLightGray: '#F2F2F2',
        mcdDarkGray: '#1a1a1a',
        mcdDarkBg: '#121212',
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
