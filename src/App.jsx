import TaskDisplayer from "./components/TaskDisplayer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { useState } from "react";


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
      newGroup = newGroup.filter((val) => val.id !== id);
      return newGroup;
    })
  }

  return(
    <div className="app">
      <Sidebar groups={groups}  addGroup={addGroup} removeGroup={removeGroup}
      displayGroup="a"
      />
      <TaskDisplayer toDisplay={initTask} groups={groups}/>
    </div>
  );
}

export default App
