// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/ui'),
    require('tailwindcss-font-inter')({ // it's plugin's default settings
      a: -0.0223,
      b: 0.185,
      c: -0.1745,
      baseFontSize: 16,
      baseLineHeight: 1.5,
      importFontFace: false,
      disableUnusedFeatures: false
    })
  ]
};
