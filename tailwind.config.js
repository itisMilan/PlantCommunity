/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/partials/*ejs", "./js/main.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("tw-elements/dist/plugin.cjs")],
  daisyui:{
    themes:["emerald","forest","cupcake"]
  }

}

