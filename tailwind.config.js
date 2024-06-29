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
        pacifico: "Pacifico"
      },

      boxShadow: {
        "blur": "0 0 16px #12f7ff",
      },
    },
  },
  plugins: [],
};
