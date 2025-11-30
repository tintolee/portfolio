/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        bg: {
          DEFAULT: '#0b0d17',
          subtle: '#121524',
          elevate: '#1d2233'
        },
        brand: {
          purple: '#8b5cf6',
          pink: '#ec4899',
          glow: '#a855f7'
        }
      },
      boxShadow: {
        soft: '0 4px 24px -2px rgba(0,0,0,0.25)',
        glow: '0 0 24px -2px rgba(168,85,247,0.45)',
        glass: '0 8px 40px -8px rgba(0,0,0,0.55)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
};