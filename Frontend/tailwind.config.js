/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00A67E",
          bg: "#F7FBFA",
          white: "#FFFFFF",
          text: "#1A2B2E",
          muted: "#6B7C7C",
          blue: "#3A86FF",
          border: "#E6ECEC",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(26, 43, 46, 0.08)",
        card: "0 12px 28px rgba(26, 43, 46, 0.08)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};