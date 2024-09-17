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
      animation: {
        'marquee-x': 'marquee-x 20s linear infinite',
        'marquee-y': 'marquee-y 20s linear infinite',
      },
      keyframes: {
        'marquee-x': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-y': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}