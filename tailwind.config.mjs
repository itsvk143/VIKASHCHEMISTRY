/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      heading: ["var(--font-manrope)", "system-ui", "sans-serif"],
      primary: ["var(--font-inter)", "system-ui", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#070D1E",
        navy: {
          950: "#040711",
          900: "#070D1E",
          850: "#0B142F",
          800: "#0F1C3F",
          700: "#172A5E",
          600: "#223B7E",
        },
        royal: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
        },
        gold: {
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          gold: "#F59E0B",
          cyan: "#06B6D4",
          emerald: "#10B981",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};