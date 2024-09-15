module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gold': '#C0990F',
        'custom-blue': '#1C2168',
      },
      fontFamily: {
        sitka: ['Sitka', 'serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}