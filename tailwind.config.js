module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'body-light': '#252530',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
