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
      }
    },
  },
  plugins: [],
}
export default config
