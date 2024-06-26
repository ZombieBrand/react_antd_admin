/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  important: true,
  darkMode: 'selector',
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
