/** @type {import('tailwindcss').Config} */ // Auto-suggestions ki
export default {
  //Config Tailwind ki export cheyyadaniki
  content: [
    // Scan chesi unused CSS remove cheyyadaniki
    "./index.html", // Main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // src folder lo unna JS, TS, JSX, TSX files anni
  ],
  safelist: ["scrollbar"],
  theme: {
    //Custom styles ni define cheyyadaniki
    fontFamily: {
      // Custom fonts add cheyyadaniki
      display: ["Poppins", "sans-serif"], //Poppins font ni assign chestunnam.sans-serif fallback font laga untundi (Poppins load avakapothe sans-serif vaduthundi).
    },

    extend: {
      //Existing styles ni modify cheyyakunda add cheyyadaniki
      //colors used in the project
      colors: {
        primary: "#058603",
        secondary: "#EF803E",
      },
      backgroundImage: {
        "login-bg-img": "url('./src/assets/images/bg-image.png')",
        "signup-bg-img": "url('./src/assets/images/signup-bg-img.png')",
      },
    },
  },
  plugins: [], //Extra features add cheyyadaniki
};
