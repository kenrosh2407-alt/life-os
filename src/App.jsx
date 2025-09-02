function App() {
  return (
    <div>
      <h1>Life OS (test)</h1>
      <p>
        This is an installable PWA. It will stay on this version until you publish an update.
      </p>
      <ol>
        <li>iPhone (Safari): Share → <strong>Add to Home Screen</strong></li>
        <li>Android (Chrome): Menu → <strong>Install app</strong></li>
      </ol>
      <footer>
        <small>Version: {import.meta.env.VITE_APP_VERSION || "0.0.0"} </small>
      </footer>
    </div>
  )
}

export default App;