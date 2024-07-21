/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      fontFamily: {
        poppins: "Poppins",
        pacifico: "Pacifico",
      },

      boxShadow: {
        blur: "0 0 16px #12f7ff",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hover", [
        "@media (hover: hover) { &:hover }",
        "@media (hover: none) { &:active }",
      ]);
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
