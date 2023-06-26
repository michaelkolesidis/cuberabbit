import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    open: false,
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
  },
  optimizeDeps: {
    exclude: ['gsap']
  }
});
