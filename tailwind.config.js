/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'banner-img1': "url('/images/1.png')",
        },
      },
    },
    plugins: [],
  }