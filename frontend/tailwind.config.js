export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        accent: "#2D5BFF",
        muted: "#6B7280",
        background: "#FAFAF7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
