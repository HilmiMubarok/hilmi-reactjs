module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#FFF',
        'font-light': '#023047',

        'bg-dark': '#293241',
        'font-dark': '#E0FBFC',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
