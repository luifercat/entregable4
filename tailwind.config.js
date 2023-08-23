/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md600: { raw: "(max-width: 600px)" },
      md390: { raw: "(max-width: 390px)" },
    },

    fontFamily: {
      "Open Sans": ["Open Sans", "sans-serif"], //fuente para usar en tailwind
    },
  },
  plugins: [],
};
