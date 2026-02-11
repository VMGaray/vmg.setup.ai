/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // este es clave para que escanee todo src/
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#71AE97",
          purple: "#7971AE",
          pink: "#AE7188",
          olive: "#A7AE71",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(to right, #71AE97, #7971AE)",
      },
    },
  },
  plugins: [],
}