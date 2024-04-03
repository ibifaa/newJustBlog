import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "https://vercel.com/ibifaas-projects/",
  plugins: [tailwindcss, autoprefixer],
});
