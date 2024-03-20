import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ['black']: '#000',
        ['dark-brown']: '#362222',
        ['dark-gray']: '#171010',
        ['gray']: '#2B2B2B',
        ['light-gray']: '#423F3E',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        buda: ['Buda', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        philosopher: ['Philosopher', 'sans-serif'],
        jakarta: ['PlusJakartaSans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config