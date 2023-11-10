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
        greenBrand: '#09D092',
        surfaceGreen: '#34D399',
        textBrand: '#9CA3AF',
      }
    },
  },
  plugins: [],
}
export default config
