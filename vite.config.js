import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { version } from "./package.json"; // 👈 get version from package.json

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // 👇 inject the app version into your code as an environment variable
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(version),
  },
});