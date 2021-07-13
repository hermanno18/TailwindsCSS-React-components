module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class' or 'false'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['odd'],
      rotate: ['odd']
    },
  },
  plugins: [],
}
