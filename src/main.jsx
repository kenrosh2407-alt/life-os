import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Register the service worker provided by vite-plugin-pwa
import { registerSW } from "virtual:pwa-register";

// Show a simple refresh prompt when a new version is available
const updateSW = registerSW({
  immediate: true, // start SW asap (good for installable PWAs)
  onNeedRefresh() {
    // A new version is ready — prompt the user to reload
    const ok = window.confirm("An update is available. Reload now?");
    if (ok) updateSW(true);
  },
  onOfflineReady() {
    // App cached for offline use
    console.log("App is ready to work offline.");
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);