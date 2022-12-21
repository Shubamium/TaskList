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
      created:'aaaa',
      color:6,
    }
  ];

   // This state ideally should be lifted up
   let [groups, setGroups] = useState(
  //   [
  //   {id:0,group:'Chores',color:2},
  //   {id:1,group:'Life',color:4},
  //   {id:2,group:'Thoughts',color:6},
  //   {id:3,group:'Quotes',color:1}
  // ]p
  []
  );


  const addGroup = (name,iconID,bgColor)=>{
      setGroups((prev)=>{
          let newGroup = [...prev];
          let newId = prev.map((group) => group.id)
          newId = Math.max(...newId) + 1;
          newGroup.push({id:newId,group: name,icon:iconID,color:bgColor});
          
          localStorage.setItem('groupList', JSON.stringify(newGroup));
          return newGroup;
      });
  }
  const removeGroup = (id)=>{
    setGroups((prev)=>{
      let newGroup = [...prev];
      let find = newGroup.find((val)=> val.id === id);
      removeGroupFromTask(find.group);
      newGroup = newGroup.filter((val) => val.id !== id);
      localStorage.setItem('groupList', JSON.stringify(newGroup));
      return newGroup;
    })
  }

  useEffect(()=>{
    
    async function loadGroup(){
      let res = "";
        res = await JSON.parse(localStorage.getItem('groupList'));
        if(!res){
          localStorage.setItem('groupList',JSON.stringify(groups));
          res = groups;
        }
        console.log(res);
      setGroups(res);
    }

    loadGroup();
  },[]);

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

      updated = updated.map((task)=>{
          let taskNew = {...task};
          if(task.category === groupName){
            taskNew.category = '';
          }
          return taskNew;
      });

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

  const changeOrderGroup =(prev,current)=>{
    console.log(prev,current);
    setGroups((group)=>{
      let updated = [...group];
      let moved = updated.splice(prev,1);
      updated.splice(current,0,...moved);
      localStorage.setItem('groupList', JSON.stringify(updated));

      return updated;
    });
  }
  return(
    <div className="app">
      <Sidebar groups={groups}  addGroup={addGroup} removeGroup={removeGroup}
      displayGroup="a" showAll={showAll} showGroup={showGroup} changeOrder={changeOrderGroup}
      />
      <TaskDisplayer toDisplay={getFilteredTask} headerText={()=>{
        return toDisplay === '' ? 'Task List' : toDisplay;
      }} groups={groups} taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App
