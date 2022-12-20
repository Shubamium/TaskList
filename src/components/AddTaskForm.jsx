import { useState } from "react";

const AddTaskForm = ({submit, update, placeholderData,categoryList}) => {
    if(update){
        console.log(placeholderData);
    }

    let [name, setName] = useState(update ? placeholderData.taskName : '');
    let [desc, setDesc] = useState(update ? placeholderData.taskDes : '');
    let [cat, setCat] = useState(update ? placeholderData.category : '');

    const handleName = (e)=>{
        setName(e.target.value);
    }

    const handleDesc = (e)=>{
        setDesc(e.target.value);
    }

    const handleCat = (e)=>{
        setCat(e.target.value);
        console.log(e.target.value + "changed" + cat);
       
    }
    return ( 
        <form className="mx-5 px-10" onSubmit={(e)=>{
            e.preventDefault();
            // submit();
            // let formData = new FormData(e.target);
            // let name = formData.get('taskName');
            // let description = formData.get('taskDes');
            submit(name,desc,cat);
        }}>
            <h2 className="font-poppins text-3xl font-bold ">{update ? 'Update Task ' :'Add a new task' }</h2>
            <label htmlFor="name" className="p-2 font-poppins font-bold text-indigo-900">Name</label>
            <input type="text" id="name" name="taskName" className="p-2 m-2 w-full" required
            placeholder="Task name. . ."
            value={name}  
            onChange={handleName}

            />
            <label htmlFor="descriptions" className="p-2 font-poppins font-bold text-indigo-900">Description</label>
            <textarea name="taskDes" id="descriptions" cols="20" rows="5" className="p-2 m-2 w-full resize-none" 
            placeholder="Describe the task here. . ."
            value={desc}
            onChange={handleDesc}
            ></textarea>

            <label htmlFor="descriptions" className="p-2 font-poppins font-bold text-indigo-900">Groups</label>
            <select 
            className="w-full p-2 font-poppins m-2 text-lg bg-white text-indigo-900"
            onChange={handleCat} defaultValue={placeholderData === undefined ? "": placeholderData.category}>
                <option value=""></option>
                {categoryList.map((cat)=> (
                    <option value={cat.group} >{cat.group}</option>
                ))}
            </select>
            <button type="submit" className="block mx-auto bg-sky-900 font-poppins rounded-sm font-bold p-2 m-4 shadow-md relative text-sky-300 hover:scale-105 active:scale-95">{update ? 'Update Task' :'Add Task' }</button>
        </form>
     );
}
 
export default AddTaskForm;