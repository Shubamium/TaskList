import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <h2 className="text-3xl font-poppins font-bold border-white border-2 text-slate-900 drop-shadow-md bg-slate-400 px-3 max-w-lg mx-auto py-2 rounded-md hover:shadow-md hover:cursor-pointer transition-all">
        Task List
      </h2>
      <TaskList />
    </>

  )
}

export default App
