/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {

        'white-c': 'var(--c-white)',
        'black-c': 'var(--c-black)',
        primary: 'var(--c-primary)',
        secondary: 'var(--c-secondary)',
        light: 'var(--c-light)',
        middle: 'var(--c-middle)',
        dark: 'var(--c-dark)',
        'pr-shade1': 'var(--c-pr-shade1)',
        'pr-shade2': 'var(--c-pr-shade2)',
        'pr-shade3': 'var(--c-pr-shade3)',
        'pr-shade4': 'var(--c-pr-shade4)',
        border: 'var(--c-border)',
        'border-light': 'var(--c-border-light)',
        'text-light-1': 'var(--c-text-light-1)',
        'text-light-2': 'var(--c-text-light-2)',
        'text-dark-1': 'var(--c-text-dark-1)',
        'text-dark-2': 'var(--c-text-dark-2)',
      }
    },
  },
  plugins: [],
}

