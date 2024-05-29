import type { Config } from "tailwindcss";

// tailwind.config.js
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md:'1.5rem',
        lg:'2rem'
      }
    },
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background:"#070707FF",
          foreground: "#c5c2c2",
          primary: {
            DEFAULT: "#40183AFF",
            50: '#2d1129',
            100: '#40183a',
            200: '#65265c',
            300: '#782d6c',
            400: '#8a347d',
            500: '#c96fbc',
            600: '#d898cf',
            700: '#e8c1e2',
            800: '#e6bde0',
            900: '#f8edf7',
          },
          secondary: {
            DEFAULT: "#7C3106FF",
            50: '#240e02',
            100: '#5f2505',
            200: '#7c3106',
            300: '#b64809',
            400: '#d4540a',
            500: '#f15f0c',
            600: '#f57830',
            700: '#f79157',
            800: '#f9ab7e',
            900: '#fcd1b8',
          },
        },
      },
    }
                   })],
};
export default config;
