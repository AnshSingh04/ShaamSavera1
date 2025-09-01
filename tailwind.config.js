/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      colors: {
        orange: {
          400: '#F4A261',
          500: '#E76F51',
        },
      },
      fontSize: {
        'base': ['18px', '1.6'],
        'lg': ['20px', '1.6'],
        'xl': ['22px', '1.6'],
        '2xl': ['26px', '1.2'],
        '3xl': ['32px', '1.2'],
        '4xl': ['40px', '1.2'],
        '5xl': ['48px', '1.1'],
        '6xl': ['64px', '1.1'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};