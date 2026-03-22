import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quick Starter</h1>
        <p>Welcome to your React.js application!</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </header>
    </div>
  )
}

export default App
