/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./app.js"],
  theme: {
    colors: {
      body: "hsl(226, 43%, 10%)",
      card: "hsl(235, 46%, 20%)",
      profile: "hsl(235, 45%, 61%)",
      grey: "hsl(236, 100%, 87%)",
      white: "hsl(0, 0%, 100%)",
      "tab-active": "hsl(0, 0%, 100%)",
      "card-1": "hsl(15, 100%, 70%)",
      "card-2": "hsl(195, 74%, 62%)",
      "card-3": "hsl(348, 100%, 68%)",
      "card-4": "hsl(145, 58%, 55%)",
      "card-5": "hsl(264, 64%, 52%)",
      "card-6": "hsl(43, 84%, 65%)",
    },
    fontFamily: {
      "rubik": ["Rubik", "sans-serif"],
    },
    height:{
      main:"518px",
      90:"354px",
      62:"245px",
    },
    fontSize:{
      40:"40px",
      60:"60px",
    },
    extend: {
      gridTemplateColumns: {
        1: "minmax(1rem,1fr) minmax(0, 23rem) minmax(1rem,1fr)",
        3: "minmax(1rem,1fr) minmax(1rem,1fr) minmax(0, 23rem) minmax(1rem,1fr) minmax(1rem,1fr)",
        4: "repeat(4,16rem)",
        6: "minmax(1rem,1fr) 1095px minmax(1rem,1fr)",
        5: "repeat(3,16rem)",
        7: "1fr 1fr 1fr",
      },
      gridTemplateRows: {
        7: "repeat(5, minmax(0, 1fr))",
        2: "1fr 518px 1fr",
      },
      gridAutoRows: {
        fix: "250px",
      },
    },
  },
};
