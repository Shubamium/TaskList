import Task from "./Task";

const TaskList = ({tasks, setFinish}) => {
    return ( 
        <div className="task-list flex flex-auto flex-wrap m-5 lg:max-w-xl lg:mx-auto">
            {tasks && tasks.map((task) => 
                <Task task={task} key={task.id} completed={()=>{setFinish(task.id);}}/>
            )}
        </div>
     );
}
 
export default TaskList;