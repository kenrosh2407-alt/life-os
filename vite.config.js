import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa"; // 👈 import PWA plugin
import { version } from "./package.json"; // 👈 get version from package.json

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Life OS",
        short_name: "LifeOS",
        description: "Life OS PWA",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icon-512x512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  define: {
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(version), // 👈 inject version
  },
});