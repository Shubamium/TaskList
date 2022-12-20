import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ColorList from "./ColorList";
const AddTaskForm = ({submit, update, placeholderData,categoryList}) => {
    if(update){
        console.log(placeholderData);
    }

    let [name, setName] = useState(update ? placeholderData.taskName : '');
    let [desc, setDesc] = useState(update ? placeholderData.taskDes : '');
    let [cat, setCat] = useState(update ? placeholderData.category : '');
    let [color, setColor] = useState(update ? placeholderData.category : 6);

    let colorList = ColorList();
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
            submit(name,desc,cat,color);
        }}>
            <h2 className="font-poppins text-4xl font-bold text-blue-900 ">{update ? 'Update Task ' :'Add a new task' }</h2>
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
                    <option value={cat.group} key={cat.id}>{cat.group}</option>
                ))}
            </select>

            <label htmlFor="descriptions" className="p-2 font-poppins font-bold text-indigo-900">Colors</label>
            <div className="color-options flex justify-around p-2">
                {colorList.map((colorList,index)=>(
                    <div className={`w-10 h-10 shadow-md hover:shadow-xl hover:scale-110 cursor-pointer transition-all active:scale-95 border-2 border-white
                    ${index === color && 'color-selected rounded-full'} color-${colorList}
                    `} 
                    onClick={()=>{
                        setColor(index);
                    }
                    }>
                        {index === color && <FontAwesomeIcon icon={faCheck} className="text-slate-700 w-full h-full scale-90"/>}
                    </div>
                ))}
            </div>

            <button type="submit" className="block mx-auto bg-sky-900 font-poppins rounded-sm font-bold p-2 m-4 shadow-md relative text-sky-300 hover:scale-105 active:scale-95">{update ? 'Update Task' :'Add Task' }</button>
        </form>
     );
}
 
export default AddTaskForm;