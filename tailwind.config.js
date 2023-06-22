/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-robotoMono)'
      },
      colors: {
        'newgray': {
          100: '#E1E1E6',
          300: '#c4c4cc',
          400: '#8d8d99',
          500: '#7c7c8a',
          600: '#323238',
          700: '#29292e',
          800: '#202024',
          900: '#121214',
        },
        'newgreen': {
          300: '#00b37e',
          500: '#00875f',
          700: '#015f43',
        },
        'newred': {
          500: '#ab222e',
          700: '#7a1921',
        },
        'newyellow': {
          500: '#fba94c',
        }
      },
    },
  },
}
