import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { registerSW } from 'virtual:pwa-register'

// Ask before updating
const updateSW = registerSW({
  onNeedRefresh() {
    const ok = window.confirm('A new version of Life OS is available. Update now?')
    if (ok) updateSW()
  },
  onOfflineReady() {
    console.log('Life OS is ready to work offline.')
  }
})

createRoot(document.getElementById('root')).render(<App />)