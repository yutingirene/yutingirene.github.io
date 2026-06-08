/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        greengold: {
          primary: "#007C41", // Evergreen
          secondary: "#FFDB05", // Gold
          accent: "#FFDB05", // Gold for badges/accents
          neutral: "#333333", // Dark gray for neutral elements
          "base-100": "#ffffff", // Main background (white)
          "base-200": "#f3f4f6", // Card/Sidebar background (light gray)
          "base-content": "#1f2937", // Main text color (dark gray)
        },
      },
      "light",
      "dark",
      "cupcake",
      // ... the rest of the existing themes stay here
    ],
  },
  // darkMode: ['selector', '[data-theme="synthwave"]']
};
