/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nezuko: {
          bg:        '#fdf6f9',
          bg2:       '#fff0f5',
          pink:      '#c2517a',
          'pink-lt': '#f4a7c0',
          text:      '#1a0a10',
          text2:     '#7a4a5e',
          bamboo:    '#5a8a4a',
          wisteria:  '#8b5cf6',
          gold:      '#d4a843',
        },
      },
    },
  },
  plugins: [],
}
