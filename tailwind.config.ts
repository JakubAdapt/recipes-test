import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        black: "var(--color-black)",
        gray: "var(--color-gray)",
        orange: "var(--color-orange)",
        yellow: "var(--color-yellow)",
        green: "var(--color-green)",

        "off-black": "var(--color-off-black)",
        "off-white": "var(--color-off-white)",
      },
    },
  },
  plugins: [],
};
export default config;
