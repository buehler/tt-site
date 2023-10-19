import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-ibm)'],
      display: ['var(--font-fugaz)'],
    },
    colors: {
      white: '#fff',
      blue: '#2896ff',
      black: '#00121c',
      gold: '#fecf00',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
