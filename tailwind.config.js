/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#000000",
        "primary-2": "#FFBB00",
        "light-yellow": "#FFCF4B",
        "dark-yellow": "#27AE60",
        "light-grey": "#F9F9F9",
        "dark-grey": "#CEC6C6",
        "main": "#263238",
        "secondary": "#65624C",
        "grey-1": "#333333",
        "grey-2": "#4F4F4F",
        "grey-3": "#828282",
        "grey-4": "#B7B6B8",
        "grey-5": "#E0E0E0"
      },
      boxShadow: {
        "box-shadow-call": "4px 4px 14px 0px #0000000F",
        "box-shadow-card": "0px 1.08px 8.63px 0px #0000000F",
        "box-shadow-card-title": "0px 1px 3px 0px #FFD04F99"
      },
      backgroundImage: {
        'custom-gradient-image': 'linear-gradient(100.27deg, #263238 22.66%, #2F4B59 67.67%)',
      }
    },


  },
  plugins: [],
}

