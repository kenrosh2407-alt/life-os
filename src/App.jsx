import React from 'react';

// Import the version straight from package.json
import pkg from '../package.json';

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', color: '#eaeaea' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Life OS</h1>
      <p style={{ maxWidth: 680, lineHeight: 1.6 }}>
        This is an installable PWA. It will stay on this version until you publish an update.
      </p>

      <ol style={{ marginTop: '1rem', lineHeight: 1.8 }}>
        <li>iPhone (Safari): Share → <strong>Add to Home Screen</strong></li>
        <li>Android (Chrome): Menu → <strong>Install app</strong></li>
      </ol>

      <div style={{ marginTop: '2rem', opacity: 0.8 }}>
        <small>Version: <code>{pkg.version}</code></small>
      </div>
    </div>
  );
}