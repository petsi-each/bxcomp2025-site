import { Cinzel_Decorative } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "branco": '#E6E4E0',
        "azulescuro": '#081826',
        "azulciano": '#43D3E6',
        "azulelegante": '#0B536F',
        "creme": '#FFFCEA',
        "ouro": '#FCDA43',
        "amarelo": '#FFC66B',
        "laranja": '#F3B653',
        "marrom": '#804A28',
        "marromsuave": '#A6592D',
        "preto": '#000000'
      },
      fontFamily: {
        eloquent: ['EloquentJFRegularPro', 'sans-serif'],
        times: ['"Times New Roman"', 'Times', 'serif'],
        cinzel_decorative: ['Cinzel Decorative', 'serif'],
        poppins: ['Poppins', 'serif'],
        roboto: ['Roboto', 'serif']
      }
    },
  },
  plugins: [],
};
export default config;
