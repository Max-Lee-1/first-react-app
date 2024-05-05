/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Arial: "Arial, Helvetica, sans-serif",
        Proxima: "'Proxima Nova', sans-serif",
      },
      colors: {
        "Teal-main": "#18b4bb", //logo & headers
        "Teal-dim": "#8cdadd", //dimmer teal
        "Teal-bright": "#68f7ed", //brighter teal
        Navy: "#18223c", //background
        Chambray: "#3a5496",
        Rhino: "#2c4060",
        "Rock-Blue": "#9daacb",
        "Blue-Indigo": "#5980c3",
        "Bittersweet-Pink": "#fc7373",
        "Bittersweet-Red": "#fc645d",
        Sulu: "#a9f598",
        Peppermint: "#d4f1d8",
        "Granny-Smith-Apple": "#93dd9d",
        "Green-Pea": "#235e2b",
        Charcoal: "#42474f", //body text
        Orange: "#f89005", //call to action
      },

      accentColor: {},
      backgroundColor: {},
      borderColor: {},
      boxShadowColor: {},
      screens: {
        tiny: { raw: "(min-height: 600px)" },
        short: { raw: "(min-height: 700px)" },

        medium: { raw: "(min-height: 900px)" },
        tall: { raw: "(min-height: 1000px)" },
      },
    },
  },
  plugins: [],
};
