/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      brightness: {
        1000: '10',
      },
      padding: {
        23: '5.75rem',
      },
      screens: {
        xs: '320px',
        sm: '481px',
        md: '769px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.925rem + 0.375vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.125rem + 0.625vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.375rem + 0.75vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.75rem + 1vw, 2.5rem)',
      },
      zIndex: {
        70: '70',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        swim: 'swim 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        swim: {
          '0%': { transform: 'translateX(-100%) rotate(0deg)' },
          '50%': { transform: 'translateX(100%) rotate(5deg)' },
          '100%': { transform: 'translateX(-100%) rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
