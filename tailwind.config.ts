import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        secondary: '#E5E7EB',
        greenBrand: '#09D092',
        surfaceGreen: '#34D399',
        surfaceBlue: '#93C5FD',
        textBrand: '#9CA3AF',
        light: '#F3F4F6'
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          // '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'close-menu': {
          '0%': { transform: 'scaleX(1)' },
          '80%': { transform: 'scaleX(1.5)' },
          '100%': { transform: 'scaleX(0)' },
        },
        'open-services': {
          '0%': { transform: 'scaleX(0)' },
          // '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'close-services': {
          '0%': { transform: 'scaleX(1)' },
          // '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleX(0)' },
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
        'close-menu': 'close-menu 0.5s ease-in-out forwards',
        'open-services': 'open-services 0.5s ease-in-out forwards',
        'close-services': 'close-services 0.5s ease-in-out forwards'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
