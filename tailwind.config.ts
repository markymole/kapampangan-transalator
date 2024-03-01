import type { Config } from "tailwindcss";
import { colors } from "./app/theme/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        poppins: ["var(--font-poppins)"],
        karla: ["var(--font-karla)"],
      },
    },
  },
  plugins: [],
};
export default config;
