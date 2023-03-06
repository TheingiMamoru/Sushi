/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily:{
      'Lora':['Lora', 'serif'],
      'Poppins':['Poppins', 'sans-serif'],
      'Dancing-Script':['Dancing Script', 'cursive']
    },
    extend: {
      colors: {
        "orange":"#d56e3f",
        "dark-orange":"#d36836",
        "til":"#2c2420",
        "para":"#68544b",
        "light-para":"#958983",
        "white":"#fff1eb",
        "pale-peach":"#fff5f0",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
