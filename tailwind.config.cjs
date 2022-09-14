/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B8EC2",
        whitee: "#FFFFFF",
        whiteSmoke: "rgba(255, 255, 255, 0.8)",
        black1: "#343434",
        black2: "#454545",
        black3: "#111111",
        black4: "#222222",
        gray1: "#F0F0F0",
        gray2: "#E7E7E7",
        gray3: "#858585",
        gray4: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
