import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <h2 className="text-3xl underline font-bold font-sans text-blue-400 bg-cyan-100 px-3 max-w-md mx-auto py-7 rounded-md">Hello World!</h2>
  )
}

export default App
