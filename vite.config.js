import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This line MUST be correct for GitHub Pages to work
  base: "/dgs-lab-website/",
  plugins: [react()],
});
