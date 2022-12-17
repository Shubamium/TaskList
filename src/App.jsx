import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {

  const initTask = [
    {
      id:0,
      taskName:"First Task",
      taskDes:"Description here!!Description here!!Description here!!Description here!!",
      finished:false
    },
    {
      id:1,
      taskName:"TaskName",
      taskDes:"Description here!!",
      finished:false
    },
    {
      id:2,
      taskName:"TaskName",
      taskDes:"Description here!!",
      finished:false
    },
    {
      id:3,
      taskName:"TaskName",
      taskDes:"Description here!!",
      finished:false
    }
  ];
  let [taskList,setTaskList] = useState(initTask);

  const finishTask = (id)=>{
    let updated = taskList.map((task)=>{
      if(task.id === id){
          task.finished = !task.finished;
      }
      return task;
    });
    console.log(updated);
    setTaskList(updated);
  }
  
  return (
    <>
      <h2 className='font-poppins text-center text-4xl font-bold text-sky-500'>Task List</h2>
      <TaskList tasks={taskList} setFinish={(id)=>{
        finishTask(id);
      }}/>
    </>

  )
}

export default App
