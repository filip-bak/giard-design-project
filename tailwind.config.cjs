export default {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "320px",
      "mobile-md": { min: "450px", max: "768px" },
      tablet: "768px",
      laptop: "1280px",
      desktop: "1440px",
    },

    extend: {
      padding: {
        22: "5.56rem",
      },
      margin: {
        18: "4.5rem",
      },

      backgroundImage: {
        "nav-button": "url('/src/assets/svg/nav-icon.svg')",
        "icon-button-search": "url('/src/assets/svg/loop-icon.svg')",
        "icon-button-burger": "url('/src/assets/svg/burger-menu-icon.svg')",
      },
      gridTemplateRows: {
        hero: "1fr ",
      },
      fontSize: {
        "6xl": [
          "3.75rem",
          {
            lineHeight: "4.375rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
