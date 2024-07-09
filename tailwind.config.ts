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
        background: 'var(background)',
        'mint-green': 'var(--mint-green)',
        'light-teal': 'var(--light-teal)',
        'medium-teal': 'var(--medium-teal)',
        'dark-teal': 'var(--dark-teal)',
        'dark-grey': 'var(--dark-grey)',
        'medium-grey': 'var(--medium-grey)',
        'light-grey': 'var(--light-grey)',
        muted: 'var(--lighter-gray)',
        destructive: 'var(--destructive)',
        ring: 'var(--ring)',
        input: 'var(--input)',
      },
    },
    container: {
      center: true,
    },
    borderRadius: {
      large: '2.5rem',
      medium: '1.25rem',
      xsmall: '0.5rem',
      xxs: '4px',
    },
    boxShadow: {
      'custom-md': '0 4px 6px rgba(63, 135, 130, 0.1), 0 1px 3px rgba(63, 135, 130, 0.08)',
      'custom-lg': '0 6px 8px rgba(63, 135, 130, 0.15), 0 2px 4px rgba(63, 135, 130, 0.1)',
    },
  },
  plugins: [],
};
export default config;
