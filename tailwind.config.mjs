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
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // Use the CSS variable
      },
    },
  },
  plugins: [],
};
