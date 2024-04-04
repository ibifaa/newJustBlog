import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [tailwindcss, autoprefixer],
  build: {
    cssOutput: "./dist/style.css", // Specify output path for CSS
  },
});
