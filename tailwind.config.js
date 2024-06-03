/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-width: 1400px)' },
        'large': { 'raw': '(min-width: 990px)' }
      },
      colors: {
        'dark-green': '#3D2F22',
        'dark-white': '#EBE3D0',
      },
      width: (() => {
        const sizes = [36, 100, 147, 751, 593];
        const widthConfig = {};
        sizes.forEach(size => {
          widthConfig[`${size}px`] = `${size}px`;
        });
        return widthConfig;
      })(),
      height: (() => {
        const sizes = [35, 36, 100, 677, 454];
        const heightConfig = {};
        sizes.forEach(size => {
          heightConfig[`${size}px`] = `${size}px`;
        });
        return heightConfig;
      })(),
      backgroundImage: {
        'newspaper': "url('/newspaper.jpg')",
      },
      borderRadius: {
        '48px': '48px'
      },
      gap: Object.fromEntries(
        [32].map(size => [`${size}px`, `${size}px`])
      )
    },
  },
  plugins: [],
}
