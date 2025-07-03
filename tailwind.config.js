/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Overrides the default sans-serif stack
      serif: ['Georgia', 'serif'],
      mono: ['Courier New', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}

