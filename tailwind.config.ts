import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#eeeeee",
        black: "#272727",
        gray: "#747474",
        orange: "#ff652f",
        yellow: "#ffe400",
        green: "#14a76c",

        "off-black": "#000000",
        "off-white": "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
