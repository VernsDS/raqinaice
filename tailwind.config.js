/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EDE1D4",
        card: "#F8F0E5",
        ink: "#33202F",
        berry: "#D81B5F",
        blush: "#F1D4DE",
        mint: "#2C9C83",
        mintSoft: "#D2E7DE",
        ice: "#DCE9F2",
        mango: "#B87A1C",
        butter: "#F4E0C0",
        border: "hsl(var(--border) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        label: "0.2em",
      },
      boxShadow: {
        soft: "0 22px 55px -30px rgba(51, 32, 47, 0.45)",
        candy: "0 16px 38px -20px rgba(216, 27, 95, 0.5)",
      },
    },
  },
  plugins: [],
}
