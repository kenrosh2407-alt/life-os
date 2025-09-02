import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>Life OS</h1>
      <p>This is an installable PWA. It will stay on this version until you publish an update.</p>
      <ol>
        <li>iPhone (Safari): Share → <b>Add to Home Screen</b></li>
        <li>Android (Chrome): Menu → <b>Install app</b></li>
      </ol>
    </div>
  )
}