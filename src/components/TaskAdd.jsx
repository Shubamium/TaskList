const TaskAdd = ({click}) => {
    return (  
        <button onClick={click} className="w-full p-2 bg-blue-500 text-sky-100 cursor-pointer text-center my-4 mx-auto shadow-sm rounded-md hover:shadow-lg border-2 border-slate-700 inset-5 hover:scale-105 transition-all hover:outline active:scale-95" >
            <h2 className="text-sky-900 text-2xl font-poppins font-bold">Add New Task</h2>
        </button>
    );
}
 
export default TaskAdd;