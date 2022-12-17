const AddTaskForm = ({submit}) => {
    return ( 
        <form className="mx-5 px-10" onSubmit={(e)=>{
            e.preventDefault();
            // submit();
            let formData = new FormData(e.target);
            let name = formData.get('taskName');
            let description = formData.get('taskDes');
            submit(name,description);
        }}>
            <h2 className="font-poppins text-3xl font-bold ">Add a new task</h2>
            <label htmlFor="name" className="p-2 font-poppins font-bold text-indigo-900">Name</label>
            <input type="text" id="name" name="taskName" placeholder="Task name. . ."  className="p-2 m-2 w-full" required/>
            <label htmlFor="descriptions" className="p-2 font-poppins font-bold text-indigo-900">Description</label>
            <textarea name="taskDes" id="descriptions" placeholder="Describe the task here. . ." cols="20" rows="5" className="p-2 m-2 w-full resize-none" ></textarea>
            <button type="submit" className="block mx-auto bg-sky-900 font-poppins rounded-sm font-bold p-2 m-4 shadow-md mx-auto relative text-sky-300 hover:scale-105 active:scale-95">Add Task</button>
        </form>
     );
}
 
export default AddTaskForm;