import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'correct': "#70AE6E",
        'present': "#F0C808",
        'wrong': "#626267",
        'background': "#EDF2F4"
      },
      fontFamily: {
        'wordle-clone': [
          'Nunito', 'Nunito Sans', 'sans-serif'
        ]
      },
      gridTemplateColumns: {
        'wordle-board': 'repeat(5, 1fr)'
      },
      animation: {
        'tile-flip': 'flip 0.5s ease',
        'tile-shake': 'shake 0.5s ease-in-out'
      }
    }
  },
  plugins: [],
} satisfies Config;
