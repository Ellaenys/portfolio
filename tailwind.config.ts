import type { Config } from "tailwindcss";

// tailwind.config.js
const {nextui} = require("@nextui-org/react");

const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
    extend: {},
  },
  darkMode: "class",
  plugins: [addVariablesForColors,
            function ({ matchUtilities, theme }: any) {
              matchUtilities(
                  {
                    "bg-dot-thick": (value: any) => ({
                      backgroundImage: `url("${svgToDataUri(
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                      )}")`,
                    }),
                  },
                  { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
              );
            },
            nextui({
    themes: {
      dark: {
        colors: {
          background:"#070707FF",
          foreground: "#dcd5d5",
          primary: {
            DEFAULT: "#40183AB2",
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
            DEFAULT: "#7C31067F",
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

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
            ":root": newVars,
          });
}
