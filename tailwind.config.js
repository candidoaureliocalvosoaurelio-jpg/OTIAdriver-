/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./pages//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        otiaBlue:  "#3B82F6", // 💙
        otiaGreen: "#10B981", // 💚
      },
    },
  },
  plugins: [],
};
