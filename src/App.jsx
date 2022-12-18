import TaskDisplayer from "./components/TaskDisplayer";
import "./App.css";
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

  return(
    <div className="app">
      <div className="sidebar shadow-lg bg-slate-800">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <TaskDisplayer toDisplay={initTask}/>
    </div>
  );
}

export default App
