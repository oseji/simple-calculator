/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        two: "150%",
        end: "260%",
      },
    },
  },
  plugins: [],
};
