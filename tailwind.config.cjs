export default {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        400: "#F5F0EC",
        500: "#ffffff",
      },
      black: "#111",
      accent: {
        green: "#1B5B31",
        lightgreen: "#1d9c3c",
        blue: "#003EDC",
        apricot: {
          100: "#F5F0EC",
          500: "#DCC1AB",
          600: "#b09a89",
        },
      },
    },
    screens: {
      mobile: "320px",
      "mobile-md-end": { min: "450px", max: "767px" },
      "mobile-end": { min: "320px", max: "767px" },
      tablet: "768px",
      "tablet-end": { min: "768px", max: "1279px" },
      laptop: "1280px",
      desktop: "1440px",
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      padding: {
        22: "5.56rem",
      },
      margin: {
        18: "4.5rem",
      },

      backgroundImage: {
        "icon-nav-arrow": "url('/src/assets/svg/nav-arrow-icon.svg')",
        "icon-search": "url('/src/assets/svg/loop-icon.svg')",
        "icon-burger": "url('/src/assets/svg/burger-menu-icon.svg')",
        "icon-arrow": "url('/src/assets/svg/arrow-icon.svg')",
        gradient:
          "linear-gradient(360deg, #DCC1AB 0%, rgb(214 183 158 / 0) 100%)",
      },
      gridTemplateRows: {
        hero: "1fr ",
      },
      fontSize: {
        small: [
          "0.875rem",
          {
            letterSpacing: "0.14px",
          },
        ],
      },
      letterSpacing: {
        tightest: "-.01rem",
      },
    },
  },
  plugins: [],
};
