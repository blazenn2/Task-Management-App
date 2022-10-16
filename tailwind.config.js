const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "dp": "rgba(32,33,44,255)",
      "dpl": "rgba(32,33,44,255)",
      "dpel": "rgba(130,143,163,255)",
      "lp": "rgba(244,247,253,255)",
      "lpd": "rgba(221,226,234,255)",
      "s": "rgba(99,95,199,255)",
      "sl": "rgba(168,164,255,255)",
      "sh": "rgba(77,75,141,255)",
      "cyan": "rgba(73,196,229,255)",
      "purple": "rgba(132,113,242,255)",
      "txt": "rgba(130,143,163,255)",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      sky: colors.sky,
      blue: colors.blue,
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      violet: colors.violet,
    },
    extend: {
      backgroundImage: {}
    },
  },
  plugins: [],
}