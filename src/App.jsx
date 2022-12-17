import { useState, useEffect } from 'react'
import AddTaskForm from './components/AddTaskForm';
import Modal from './components/Modal';
import TaskList from './components/TaskList'

function App() {

  const initTask = [
    {
      id:0,
      taskName:"This is a sample Task!",
      taskDes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      finished:false
    }
  ];

  let [taskList,setTaskList] = useState(initTask);
  let [modalTask,setModalTask] = useState(false);
  let [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    async function loadStorage(){
      let res = await JSON.parse(localStorage.getItem('taskList'));
      console.log('aaa')
      setLoaded(true);
      setTaskList(res);
    }

    loadStorage();
  },[]);
  
  useEffect(()=>{
    if(!loaded)return;
    console.log('update');
    localStorage.setItem('taskList',JSON.stringify(taskList));
  },[taskList]);

  
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

  const addTask = (name,des) =>{
    setTaskList((tl)=>{
      let updated = [...tl];
      updated.push({
        id: updated.length,
        taskName:name,
        taskDes:des
      })
      return updated;
    });
  }
  
  return (
    <>
      <Modal isOpen={modalTask} onHide={()=>{setModalTask(false)}}>
        <AddTaskForm submit={(name,des)=>{
          addTask(name,des);
          setModalTask(false);
        }}/>
      </Modal>
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
