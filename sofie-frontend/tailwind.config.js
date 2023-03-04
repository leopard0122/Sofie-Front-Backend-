/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.blade.php", "./resources/**/*.js", "./resources/**/*.scss"],
  theme: {
    extend: {
      fontSize: {
        xs: "10px",
      },
      gap: {
        1: "1px",
      },
      width: {
        100: "420px",
      },
      borderWidth: {
        12: "24px",
      },
    },
  },
  plugins: [],
};
