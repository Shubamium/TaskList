import Task from "./Task";

const TaskList = ({tasks}) => {
    return ( 
        <div className="task-list">
            {tasks && tasks.map((task) => 
                <Task task={task} key={task.id} />
            )}
        </div>
     );
}
 
export default TaskList;