/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        montserratRegular: ["MontserratRegular"],
        montserratMedium: ["MontserratMedium"],
        montserratSemiBold: ["MontserratSemiBold"],
        montserratBold: ["MontserratBold"],
      },
    },
  },
  plugins: [],
};
