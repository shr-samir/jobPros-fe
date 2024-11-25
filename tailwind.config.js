/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#367768",
        red2: "#ff0000",
        highlight: "#f0e8f1",
        "lightColor": "#dde9e4",
        "lightBg": "#cfcdcd",
        dark: "#0b3527",
        white2: "#ffffff",
        copyright: "#53685f",
        black2: "#000000",
        lightblack: "#3b3a3a",
        "hoverColor": "#64c9b1",
        "socialMedia": "#4665bb",
      },
      boxShadow: {
        "boxShadow": "0 .5rem 1rem rgba(0,0,0,.2)",
      },
    },
  },
  plugins: [],
};
