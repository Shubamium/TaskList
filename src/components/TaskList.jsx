import Task from "./Task";
import TaskAdd from "./TaskAdd";

const TaskList = ({tasks, setFinish , remove}) => {
    return ( 
        <div className="task-list flex flex-auto flex-wrap m-5 lg:max-w-xl lg:mx-auto">
            <TaskAdd />
            {tasks && tasks.map((task) => 
                <Task task={task} key={task.id} 
                completed={()=>{
                    setFinish(task.id);
                }} 
                remove={()=>{
                    remove(task.id);
                }}/>
            )}
        </div>
     );
}
 
export default TaskList;