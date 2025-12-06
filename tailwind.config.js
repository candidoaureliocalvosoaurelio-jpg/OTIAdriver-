/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // CORRIGIDO: Inclui todos os subdiretórios dentro de 'app'
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    
    // CORRIGIDO: Inclui todos os subdiretórios dentro de 'components'
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    
    // CORRIGIDO: Inclui todos os subdiretórios dentro de 'pages'
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        otiaBlue: "#1F6FEB",   // 💙
        otiaGreen: "#10B981",  // 💚
      },
    },
  },
  plugins: [],
};
