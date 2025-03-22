/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "../../apps/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Adjust spacing scales to 90% of default
      spacing: {
        // Scale down common spacing values
        0.5: "0.125rem", // 90% of 0.125rem is still very small, keep as is
        1: "0.225rem", // 90% of 0.25rem
        1.5: "0.338rem", // 90% of 0.375rem
        2: "0.45rem", // 90% of 0.5rem
        2.5: "0.563rem", // 90% of 0.625rem
        3: "0.675rem", // 90% of 0.75rem
        3.5: "0.788rem", // 90% of 0.875rem
        4: "0.9rem", // 90% of 1rem
        5: "1.125rem", // 90% of 1.25rem
        6: "1.35rem", // 90% of 1.5rem
        7: "1.575rem", // 90% of 1.75rem
        8: "1.8rem", // 90% of 2rem
        9: "2.025rem", // 90% of 2.25rem
        10: "2.25rem", // 90% of 2.5rem
        11: "2.475rem", // 90% of 2.75rem
        12: "2.7rem", // 90% of 3rem
        14: "3.15rem", // 90% of 3.5rem
        16: "3.6rem", // 90% of 4rem
        20: "4.5rem", // 90% of 5rem
        24: "5.4rem", // 90% of 6rem
        28: "6.3rem", // 90% of 7rem
        32: "7.2rem", // 90% of 8rem
        36: "8.1rem", // 90% of 9rem
        40: "9rem", // 90% of 10rem
        44: "9.9rem", // 90% of 11rem
        48: "10.8rem", // 90% of 12rem
        52: "11.7rem", // 90% of 13rem
        56: "12.6rem", // 90% of 14rem
        60: "13.5rem", // 90% of 15rem
        64: "14.4rem", // 90% of 16rem
        72: "16.2rem", // 90% of 18rem
        80: "18rem", // 90% of 20rem
        96: "21.6rem", // 90% of 24rem
      },

      // Adjust font sizes to 90% of default
      fontSize: {
        xs: ["0.675rem", { lineHeight: "0.9rem" }], // 90% of 0.75rem
        sm: ["0.788rem", { lineHeight: "1.125rem" }], // 90% of 0.875rem
        base: ["0.9rem", { lineHeight: "1.35rem" }], // 90% of 1rem
        lg: ["1.013rem", { lineHeight: "1.575rem" }], // 90% of 1.125rem
        xl: ["1.125rem", { lineHeight: "1.688rem" }], // 90% of 1.25rem
        "2xl": ["1.35rem", { lineHeight: "1.8rem" }], // 90% of 1.5rem
        "3xl": ["1.688rem", { lineHeight: "2.025rem" }], // 90% of 1.875rem
        "4xl": ["2.025rem", { lineHeight: "2.25rem" }], // 90% of 2.25rem
        "5xl": ["2.7rem", { lineHeight: "1" }], // 90% of 3rem
        "6xl": ["3.375rem", { lineHeight: "1" }], // 90% of 3.75rem
        "7xl": ["4.05rem", { lineHeight: "1" }], // 90% of 4.5rem
        "8xl": ["5.4rem", { lineHeight: "1" }], // 90% of 6rem
        "9xl": ["7.2rem", { lineHeight: "1" }], // 90% of 8rem
      },

      // Adjust border radius to 90% of default
      borderRadius: {
        sm: "0.125rem", // 90% of ~0.125rem
        md: "0.338rem", // 90% of 0.375rem
        lg: "0.45rem", // 90% of 0.5rem
        xl: "0.675rem", // 90% of 0.75rem
        "2xl": "0.9rem", // 90% of 1rem
        "3xl": "1.35rem", // 90% of 1.5rem
      },

      // Adjust max-width for containers
      maxWidth: {
        "2xs": "15.75rem", // 90% of 17.5rem
        xs: "18rem", // 90% of 20rem
        sm: "22.5rem", // 90% of 24rem
        md: "25.2rem", // 90% of 28rem
        lg: "31.5rem", // 90% of 32rem
        xl: "33.75rem", // 90% of 36rem
        "2xl": "40.5rem", // 90% of 42rem
        "3xl": "45rem", // 90% of 48rem
        "4xl": "49.5rem", // 90% of 56rem
        "5xl": "58.5rem", // 90% of 64rem
        "6xl": "67.5rem", // 90% of 72rem
        "7xl": "76.5rem", // 90% of 80rem
      },
    },
  },
  plugins: [],
};
