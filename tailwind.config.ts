import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(/hero-pattern.svg)',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        'mint-green': '#EEF8F7',
        'light-teal': '#69AEA9',
        'medium-teal': '#438883',
        'dark-teal': '#3F8782',
        'dark-grey': '#222',
        'medium-grey': '#444',
        'light-grey': '#666',
      },
    },
    container: {
      center: true,
    },
    borderRadius: {
      large: '2.5rem',
      medium: '1.25rem',
      xsmall: '0.5rem',
    },
    boxShadow: {
      'custom-md': '0 4px 6px rgba(63, 135, 130, 0.1), 0 1px 3px rgba(63, 135, 130, 0.08)',
      'custom-lg': '0 6px 8px rgba(63, 135, 130, 0.15), 0 2px 4px rgba(63, 135, 130, 0.1)',
    },
  },
  plugins: [],
};
export default config;
