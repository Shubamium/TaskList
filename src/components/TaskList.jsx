import Task from "./Task";

const TaskList = ({tasks}) => {
    return ( 
        <div className="task-list flex flex-auto flex-wrap m-5 lg:max-w-xl lg:mx-auto">
            {tasks && tasks.map((task) => 
                <Task task={task} key={task.id}/>
            )}
        </div>
     );
}
 
export default TaskList;