import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import YouPage from "./pages/YouPage";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Life OS</h1>
      <p>This is an installable PWA. It will stay on this version until you publish an update.</p>
      <ol>
        <li>iPhone (Safari): Share → <strong>Add to Home Screen</strong></li>
        <li>Android (Chrome): Menu → <strong>Install app</strong></li>
      </ol>

      <div style={{ marginTop: 24 }}>
        <h2>Pages</h2>
        <ul>
          <li>
            <Link to="/you">You (Vitals & trackers)</Link>
          </li>
        </ul>
      </div>

      <footer style={{ marginTop: 32, opacity: 0.6 }}>
        <small>Version: {import.meta.env.VITE_APP_VERSION || "0.0.0"}</small>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          padding: "12px 20px",
          borderBottom: "1px solid #eee",
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ fontWeight: 700, textDecoration: "none" }}>
          Life&nbsp;OS
        </Link>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/you">You</Link>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/you" element={<YouPage />} />
          {/* catch-all → home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}