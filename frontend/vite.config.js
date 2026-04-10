import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  css: {
    // Bypass PostCSS config auto-detection which fails on Node v24
    postcss: {}
  }
});