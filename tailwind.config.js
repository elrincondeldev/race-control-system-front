/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 0px 6px -1px rgba(0, 0, 0, 0.50)',
      },
    },
  },
  plugins: [],
};
