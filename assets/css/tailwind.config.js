module.exports = {
  darkMode: "class",
  content: [
    "./layouts/**/*.html",
    "./content/**/*.html",
    "./themes/**/layouts/**/*.html", // Themes layouts directory
    "./themes/**/content/**/*.html", // Themes content directory, if applicable
    "./assets/**/*.js", // Include any JavaScript files where Tailwind classes might be used
    "./static/**/*.html", // Include static HTML if you have them
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b91c1c",
          dark: "#34d399",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        noise: "url('/img/noise.png')",
      },
      backgroundPosition: {
        zero: "0 0",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
