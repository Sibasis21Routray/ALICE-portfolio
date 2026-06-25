import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: ["lucide-react"],
  },

  server: {
    allowedHosts: [
      "aliceclaraaugustine.com",
      "www.aliceclaraaugustine.com",
    ],
  },

  preview: {
    allowedHosts: [
      "aliceclaraaugustine.com",
      "www.aliceclaraaugustine.com",
    ],
  },
});