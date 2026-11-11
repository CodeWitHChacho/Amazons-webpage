/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add this line to enable class-based dark mode
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Add the new primary color for the light theme
      colors: {
        primary: {
          '500': '#FF5500', // The main orange
          '600': '#E64D00', // A darker shade for hover states
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(0, 212, 255, 0.7)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 10px rgba(0, 212, 255, 0)',
          },
        },
      }
    },
  },
  plugins: [],
}