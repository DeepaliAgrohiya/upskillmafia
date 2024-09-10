/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',  // For React projects
//     './public/index.html',          // If you're also using Tailwind in your HTML files
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
