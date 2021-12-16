module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      "100px": "0 10px 30px 0 hsl(245, 75%, 52%)",
    },
    maxWidth: {
      fscreen: "100%",
    },
    extend: {
      width: {
        cardWidth: "100%",
      },
      backgroundImage: (theme) => ({
        upImg: "url('./imgs/pattern-background-desktop.svg')",
      }),
      colors: {
        ownPrimaryRed: "#ed1515",
        PaleBlue: "hsl(225, 100%, 94%)",
        BrightBlue: "hsl(245, 75%, 52%)",
        VeryPaleBlue: "hsl(225, 100%, 98%)",
        DesaturatedBlue: "hsl(224, 23%, 55%)",
        DarkBlue: "hsl(223, 47%, 23%)",
      },
      fontSize: {
        ownfSize: "25px",
      },
      fontFamily: {
        ownfFamily: [
          "[Red Hat Display](https://fonts.google.com/specimen/Red+Hat+Display)",
        ],
      },
      fontWeight: {
        ownfWeight1: 500,
        ownfWeight2: 700,
        ownfWeight3: 900,
      },
      padding: {
        "18px": "18px",
        "4px": "4px",
        "22px": "28px",
      },
    },
  },
  plugins: [],
};
