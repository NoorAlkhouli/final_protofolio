import {useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState(false)
  return (
    <div className={`${mode ? "dark" : ""}`}>
      <button onClick={() => setMode(!mode)}>mode</button>
      <h1 className="text-black font-bold underline dark:text-white dark:bg-black">
        Hello World
      </h1>
    </div>
  )
}

export default App
