import { useState } from 'react'
import Modal from './components/Modal';
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
  let [modalTask,setModalTask] = useState(false);

  const finishTask = (id)=>{
    let updated = taskList.map((task)=>{
      if(task.id === id){
          task.finished = !task.finished;
      }
      return task;
    });

    setTaskList(updated);
  }

  const removeTask = (id)=>{
    setTaskList((prev)=>{
      let updated = prev.filter(task => task.id !== id);
      return updated;
    });
  }
  
  return (
    <>
      <Modal isOpen={modalTask} onHide={()=>{setModalTask(false)}}></Modal>
      <h2 className='font-poppins text-center text-4xl font-bold text-sky-500'>Task List</h2>
      <TaskList 
      tasks={taskList} 
      setFinish={(id)=>{
        finishTask(id);
      }}
      remove={(id)=>{
        removeTask(id);
      }}
      taskModal={setModalTask}
      />
    </>

  )
}

export default App
