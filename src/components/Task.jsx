const Task = ({task}) => {
    return ( 
        <div className="task p-2 text-sky-100 text-center bg-sky-500 my-4 max-w-md mx-auto shadow-sm rounded-md hover:shadow-lg border-2 border-slate-700 inset-5 hover:translate-x-3 relative transition-all" >
            <h2 className="font-poppins text-xl font-bold text-sky-900 my-0">{task.taskName}</h2>
            <p className="font-poppins">{task.taskDes}</p>
        </div>
     );
}
 
export default Task;