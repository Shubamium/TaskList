const Task = ({task}) => {
    return ( 
        <div className="task text-sky-300" >
            <h2>{task.taskName}</h2>
            <p>{task.taskDes}</p>
        </div>
     );
}
 
export default Task;