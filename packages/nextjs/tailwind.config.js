/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3029FF",
          "primary-content": "#F6F6F6",
          secondary: "#3029ff",
          "secondary-content": "#f6f6f6",
          accent: "#3029ff",
          "accent-content": "#3029ff",
          neutral: "#131313",
          "neutral-content": "#f6f6f6",
          "base-100": "#f6f6f6",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#131313",
          info: "#3029ff",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#3029FF",
          "primary-content": "#F6F6F6",
          secondary: "#131313",
          "secondary-content": "#f6f6f6",
          accent: "#3029ff",
          "accent-content": "#212638",
          neutral: "#131313",
          "neutral-content": "#f6f6f6",
          "base-100": "#f6f6f6",
          "base-200": "#f4f8ff",
          "base-300": "#DAE8FF",
          "base-content": "#131313",
          info: "#3029ff",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
