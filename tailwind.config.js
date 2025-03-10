/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}','./app/Login/**/*.{js,jsx,ts,tsx}','./app/Register/**/*.{js,jsx,ts,tsx}',,'./app/(tabs)/**/*.{js,jsx,ts,tsx}','./app/**/*.{js,tx,tsx}'],

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
