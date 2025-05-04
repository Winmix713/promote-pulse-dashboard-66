import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 4px 12px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        radius: {
          small: "6px",
          medium: "8px",
          large: "12px",
        },
      },
      themes: {
        light: {
          colors: {
            background: "#F9FAFB",
            foreground: "#18181B",
            primary: {
              50: "#e6f7ef",
              100: "#ccf0df",
              200: "#99e0bf",
              300: "#66d19f",
              400: "#33c17f",
              500: "#00a656", // Main primary color
              600: "#00964d",
              700: "#007a3f",
              800: "#005d2f",
              900: "#003f20",
              950: "#002010",
              DEFAULT: "#00a656",
              foreground: "#FFFFFF"
            },
            success: {
              50: "#E6FFF0",
              100: "#CCFFE0",
              200: "#99FFC2",
              300: "#66FFA3",
              400: "#33FF85",
              500: "#22c55e",
              600: "#00B85E",
              700: "#008A47",
              800: "#005C2F",
              900: "#002E18",
              DEFAULT: "#22c55e",
              foreground: "#FFFFFF"
            },
            warning: {
              50: "#FFF8E6",
              100: "#FFF1CC",
              200: "#FFE499",
              300: "#FFD666",
              400: "#FFC933",
              500: "#f97316",
              600: "#CC9600",
              700: "#997000",
              800: "#664B00",
              900: "#332500",
              DEFAULT: "#f97316",
              foreground: "#FFFFFF"
            },
            danger: {
              50: "#FFE6E6",
              100: "#FFCCCC",
              200: "#FF9999",
              300: "#FF6666",
              400: "#FF3333",
              500: "#ef4444",
              600: "#CC0000",
              700: "#990000",
              800: "#660000",
              900: "#330000",
              DEFAULT: "#ef4444",
              foreground: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#18181B"
            },
            content2: {
              DEFAULT: "#F9FAFB",
              foreground: "#18181B"
            },
            content3: {
              DEFAULT: "#F4F4F5",
              foreground: "#18181B"
            }
          }
        },
        dark: {
          colors: {
            background: "#18181B",
            foreground: "#F9FAFB",
            primary: {
              50: "#002010",
              100: "#003f20",
              200: "#005d2f",
              300: "#007a3f",
              400: "#00964d",
              500: "#00a656", // Keep the same primary in dark mode
              600: "#33c17f",
              700: "#66d19f",
              800: "#99e0bf",
              900: "#ccf0df",
              950: "#e6f7ef",
              DEFAULT: "#00a656",
              foreground: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#27272A",
              foreground: "#F9FAFB"
            },
            content2: {
              DEFAULT: "#3F3F46",
              foreground: "#F9FAFB"
            },
            content3: {
              DEFAULT: "#52525B",
              foreground: "#F9FAFB"
            }
          }
        }
      }
    })
  ]
};