/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#3D2F22',
        'dark-white': '#EBE3D0',
      },
      backgroundImage: {
        'newspaper': "url('/newspaper.Jpeg')",
      },
    },
  },
  plugins: [],
}
