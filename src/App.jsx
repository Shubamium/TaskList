import TaskDisplayer from "./components/TaskDisplayer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { useState, useEffect } from "react";


function App() {

  const initTask = [
    {
      id:0,
      taskName:"This is a sample Task!",
      taskDes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      finished:false,
      created:'aaaa'
    }
  ];

   // This state ideally should be lifted up
   let [groups, setGroups] = useState([
    {id:0,group:'Foods'},
    {id:1,group:'Chores'},
    {id:2,group:'Job'}
  ]);


  const addGroup = (name)=>{
      setGroups((prev)=>{
          let newGroup = [...prev];
          newGroup.push({group:name});
          return newGroup;
      });
  }
  const removeGroup = (id)=>{
    setGroups((prev)=>{
      let newGroup = [...prev];
      let find = newGroup.find((val)=> val.id === id);
      removeGroupFromTask(find.group);
      newGroup = newGroup.filter((val) => val.id !== id);
      return newGroup;
    })
  }

  let [taskList,setTaskList] = useState(initTask);
  let [loaded, setLoaded] = useState(false);
  let [toDisplay, setToDisplay] = useState('');

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
    // setToDisplay(taskList);
  },[taskList]);

  const removeGroupFromTask = (groupName)=>{
    setTaskList((tl)=>{
      let updated = [...tl];
      // console.log(taskList,groupName);
      updated = updated.map((task)=>{
          let taskNew = {...task};
          if(task.category === groupName){
            taskNew.category = '';
          }
          return taskNew;
      });
    //  console.log(updated);

      return updated;
    });

  }
  
  const showAll = ()=>{
    setToDisplay('');
  }

  const showGroup = (groupName)=>{
    setToDisplay(groupName);
  }

  const filterTask = ()=> taskList.filter((task) => task.category === toDisplay);

  const getFilteredTask = ()=>{
    return toDisplay === '' ? taskList : filterTask();
  };

  return(
    <div className="app">
      <Sidebar groups={groups}  addGroup={addGroup} removeGroup={removeGroup}
      displayGroup="a" showAll={showAll} showGroup={showGroup}
      />
      <TaskDisplayer toDisplay={getFilteredTask} groups={groups} taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App
