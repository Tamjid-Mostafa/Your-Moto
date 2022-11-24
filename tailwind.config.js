module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    // ...
    
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#E6A84C",

      secondary: "#F2E7D5",

      accent: "#393E46",

      neutral: "#3D4452",

      "base-100": "#FFFFFF",

      info: "#0CA6E9",

      success: "#2BD4BD",

      warning: "#F4C152",

      error: "#FB6F84",
    },
  },
 
  plugins: [require('flowbite/plugin')],
}