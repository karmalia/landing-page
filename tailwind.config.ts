import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/react-steam-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        steam: "#4C5945",
        weldedIron: "#4C5844",
        steamGold: "#C1B657",
        steamGold2: "#958831",
        steamOlive: "#A5B19D",
        trachery: "#3F4738",
        borderTopLeft: "#808080",
        borderBottomRight: "#282E22",
        scrollBackground: "#5A6A50",
      },
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: "100%",

          md: "100%",

          lg: "1024px",

          xl: "1024px",

          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
