import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxxs: "320px",
      // => @media (min-width: 320px) { ... }

      xxs: "375px",
      // => @media (min-width: 375px) { ... }

      xs: "430px",
      // => @media (min-width: 430px) { ... }

      sm: "768px",
      // => @media (min-width: 768px) { ... }

      md: "980px",
      // => @media (min-width: 980px) { ... }

      lg: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: {
          0: "#000000",
          100: "#00141A",
          300: "#333D40",
          500: "#7E888C",
          600: "#95A2A6",
          700: "#DAE3E5",
          900: "#FFFFFF",
        },
        secondary: {
          0: "#1A0900",
          100: "#331100",
          300: "#662200",
          500: "#F25100",
          700: "#F2B191",
          900: "#F2DACE",
        },
        primary: {
          0: "#00141A",
          100: "#001D26",
          300: "#004C66",
          500: "#00B5F2",
          700: "#99E5FF",
          900: "#D9F5FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
