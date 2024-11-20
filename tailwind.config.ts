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
      }
    }
  },
  plugins: [],
} satisfies Config;
