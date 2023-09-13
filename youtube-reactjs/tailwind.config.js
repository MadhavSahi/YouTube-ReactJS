/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm':'50px',
      'sm': '200px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mobile': '320px', // Add this new breakpoint for mobile devices
    },
    extend: {},
  },
  plugins: [],
}

