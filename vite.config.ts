import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // REQUIRED for Vercel + SPA
  base: "./",

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});
