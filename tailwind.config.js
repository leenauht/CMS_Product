/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "w-540": "540px",
        "w-1280": "1280px",
        "w-1390": "1390px",
      },
      backgroundColor: {
        "bg-footer": "#BCCCDC",
        "bg-modal": "#A2D2DF",
        "bg-form": "#EEEEEE",
      },
      fontSize: {
        "fs-30": "30px",
      },
      width: {
        "w-540": "540px",
      },
      boxShadow: {
        "blue-3": "0 2px 4px #c9d8f4",
      },
    },
  },
  plugins: [],
};
