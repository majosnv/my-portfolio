/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          400: '#9CA3AF',
        },
        'blue': {
          600: '#316FF6',
          700: '#1941BA',
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Použite podobný font ako Titans.sk
      },
      
    },
  },
  plugins: [],
};