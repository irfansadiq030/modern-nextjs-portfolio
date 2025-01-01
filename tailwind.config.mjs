/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#58FF81",
        accent: "#412DFF",
        charcoal: "#202020",
        silver: "#BABABA",
      },
      fontFamily: {
        sans: ["var(--font-red-hat-text)", "sans-serif"], // Use the CSS variable
      },
    },
  },
  plugins: [],
};
