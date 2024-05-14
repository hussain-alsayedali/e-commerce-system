/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkpurple": "#42316F",
        "nuetralpurple": "#6750A4",
        "lightpurple": "#6750A4",
        "semiwhite": "#F3EDF7",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),  // Added the forms plugin here
  ],
};
