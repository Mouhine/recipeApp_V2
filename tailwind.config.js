/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        Email_bg:
          "url('https://cdn.pixabay.com/photo/2017/03/10/13/57/cooking-2132874__340.jpg')",
        Banner_bg:
          "url('https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758__340.jpg')",
        Intro_hero_bg:
          "url('https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
