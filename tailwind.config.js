/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'orange': '#EA6510',
      'orangeLight': '#e97537',
      'white': '#FFFFFF',
      'green': '#5F6245',
      'grey':'#6B6B6B',
      'black': '#0a0a0a',
      'greenlight': 'rgba(95, 98, 69, 0.5)',
      'greendark': '#4B4C37',
      'blue': '#172554',
      'darkgrey': '#111827'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
