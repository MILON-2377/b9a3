/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
         backgroundImage: {
            'banner-img1': "url('/images/banner1.png')",
            'banner-img2': "url('/banner2.png')",
            'banner-img3': "url('/banner3.png')",
         },
      },
    },
    plugins: [],
  }