import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h2 className="text-3xl font-poppins font-bold  text-slate-900 drop-shadow-md bg-slate-400 px-3 max-w-lg mx-auto py-2 rounded-md hover:shadow-md hover:cursor-pointer transition-all">
      Task List
    </h2>
  )
}

export default App
