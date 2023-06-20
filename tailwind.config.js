/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "default-white": "#fff",
        "opacity-gold-25": "rgba(207, 182, 125, 0.25)",
        "opacity-dark-gold-50": "rgba(161, 141, 97, 0.5)",
        "default-black": "#000",
        "default-dark-gold": "#a18d61",
        "opacity-black-5": "rgba(0, 0, 0, 0.05)",
        "opacity-black-10": "rgba(0, 0, 0, 0.1)",
        "opacity-gold-5": "rgba(207, 182, 125, 0.05)",
        "opacity-black-50": "rgba(0, 0, 0, 0.5)",
        "opacity-dark-gold-10": "rgba(161, 141, 97, 0.1)",
        "opacity-black-black75": "rgba(0, 0, 0, 0.75)",
        "opacity-gold-gold50": "rgba(207, 182, 125, 0.5)",
        "opacity-black-25": "rgba(0, 0, 0, 0.25)",
        "opacity-white-75": "rgba(255, 255, 255, 0.75)",
        "opacity-white-50": "rgba(255, 255, 255, 0.5)",
        lightpink: "#ffb4c1",
        "hotel-hps-01": "#008dd8",
      },
      fontFamily: {
        "english-display-desktop-light": "'Public Sans'",
        "paragraph-default-light": "Inter",
        "acumin-pro-condensed": "'Acumin Pro Condensed'",
        "acumin-pro": "'Acumin Pro'",
      },
      borderRadius: {
        "81xl": "100px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      xs: "0.75rem",
      base: "1rem",
      "37xl": "3.5rem",
      "5xl": "1.5rem",
      "17xl": "2.25rem",
      xl: "1.25rem",
      "117xl": "8.5rem",
      "125xl": "9rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
