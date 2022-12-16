import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {

  const initTask = [
    {
      id:0,
      taskName:"First Task",
      taskDes:"Description here!!"
    },
    {
      id:1,
      taskName:"TaskName",
      taskDes:"Description here!!"
    },
    {
      id:2,
      taskName:"TaskName",
      taskDes:"Description here!!"
    },
    {
      id:3,
      taskName:"TaskName",
      taskDes:"Description here!!"
    }
  ];
  let [taskList,setTaskList] = useState(initTask);
  
  return (
    <>
      <h2 className="text-3xl my-8 font-poppins font-bold border-white border-2 text-slate-900 drop-shadow-md bg-sky-500 px-3 max-w-lg mx-auto py-2 rounded-md hover:shadow-md hover:cursor-pointer transition-all">
        Task List
      </h2>
      <TaskList tasks={taskList}/>
    </>

  )
}

export default App
