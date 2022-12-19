import { useState, useEffect } from 'react'
import AddTaskForm from './AddTaskForm';
import Modal from './Modal';
import TaskList from './TaskList';


const TaskDisplayer = ({toDisplay}) => {
  let [taskList,setTaskList] = useState(toDisplay);
  let [modalTask,setModalTask] = useState(false);
  let [modalUpdate,setModalUpdate] = useState(false);
  let [updateID,setUpdateID] = useState(0);
  let [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    async function loadStorage(){
      let res = await JSON.parse(localStorage.getItem('taskList'));
      setLoaded(true);
      setTaskList(()=>{
        return res || [];
      });
    }

    loadStorage();
  },[]);
  
  useEffect(()=>{
    if(!loaded)return;
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
      let newDate = new Date();
      let newIndex = updated.map(obj=> obj.id);
      newIndex = newIndex.length === 0 ? 0 : Math.max(...newIndex) + 1;
      console.log(newIndex);
      updated.push({
        id: newIndex,
        taskName:name,
        taskDes:des,
        created: newDate.toUTCString()
      })
      return updated;
    });
  }

  const updateTask = (id, name, des)=>{
    console.log(id, name,des);

    setTaskList((prev)=>{
      let updated = prev.map(task=>{
        if(task.id === id){
          let newTask = {...task,taskName:name, taskDes:des};
          return newTask;
        }
        return task;
      });
      return updated;
    });
  }
  
  return (
    <div className='panel-offset'>
      <Modal isOpen={modalTask} onHide={()=>{setModalTask(false)}}>
        <AddTaskForm submit={(name,des)=>{
          addTask(name,des);
          setModalTask(false);
        }}/>
      </Modal>

      <Modal isOpen={modalUpdate} onHide={()=>{setModalUpdate(false)}}>
        <AddTaskForm submit={(name,des)=>{
          updateTask(updateID,name,des);
          setModalUpdate(false);
        }} update={true} placeholderData={taskList.find((task)=> task.id == updateID)}/>
      </Modal>

      <h2 className='font-poppins text-center text-4xl font-bold text-sky-500 bg-blue-800 p-4 shadow-lg'>Task List</h2>

      <TaskList 
      tasks={taskList} 
      setFinish={(id)=>{
        finishTask(id);
      }}
      remove={(id)=>{
        removeTask(id);
      }}
      taskModal={setModalTask}
      updateModal={(id)=>{
        setUpdateID(id);
        setModalUpdate(true);
      }}
      />
    </div>

  )
}
 
export default TaskDisplayer;