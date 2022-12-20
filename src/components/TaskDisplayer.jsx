import { useState, useEffect } from 'react'
import AddTaskForm from './AddTaskForm';
import Modal from './Modal';
import TaskList from './TaskList';


const TaskDisplayer = ({toDisplay, headerText,groups, taskList, setTaskList}) => {
  
  let [modalTask,setModalTask] = useState(false);
  let [modalUpdate,setModalUpdate] = useState(false);
  let [updateID,setUpdateID] = useState(0);


  
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

  const addTask = (name,des,cat) =>{
    setTaskList((tl)=>{
      let updated = [...tl];
      let newDate = new Date();
      let newIndex = updated.map(obj=> obj.id);
      newIndex = newIndex.length === 0 ? 0 : Math.max(...newIndex) + 1;
      updated.push({
        id: newIndex,
        taskName:name,
        taskDes:des,
        created:newDate.toUTCString(),
        category:cat
      })
      return updated;
    });
  }

  const updateTask = (id, name, des,cat)=>{

    setTaskList((prev)=>{
      let updated = prev.map(task=>{
        if(task.id === id){
          let newTask = {...task,taskName:name, taskDes:des, category:cat};
          return newTask;
        }
        return task;
      });
      return updated;
    });
  }
  


  return (
    <div className='panel-offset  shadow-inner'>
      <Modal isOpen={modalTask} onHide={()=>{setModalTask(false)}}>
        <AddTaskForm submit={(name,des,cat)=>{
          addTask(name,des,cat);
          setModalTask(false);
        }}
        categoryList={groups}
        />
      </Modal>

      <Modal isOpen={modalUpdate} onHide={()=>{setModalUpdate(false)}}>
        <AddTaskForm submit={(name,des,cat)=>{
          updateTask(updateID,name,des,cat);
          setModalUpdate(false);
        }} update={true} placeholderData={taskList.find((task)=> task.id == updateID)}
        categoryList={groups}
        />
      </Modal>

      <h2 className='font-poppins text-center text-4xl font-bold text-sky-500 bg-blue-800 p-4 shadow-lg'>{headerText() !== undefined && headerText()}</h2>

      <TaskList 
      tasks={toDisplay()} 
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