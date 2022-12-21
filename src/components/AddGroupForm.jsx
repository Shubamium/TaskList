import { icon } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import IconList from "./IconList";

const AddGroupForm = ({submit, update}) => {

    let [name, setName] = useState('');
    // let [desc, setDesc] = useState(update ? placeholderData.taskDes : '');
    // let [cat, setCat] = useState(update ? placeholderData.category : '');

    const handleName = (e)=>{
        setName(e.target.value);
    }

    let icons = IconList();
    let [icon, setIcon] = useState(0);

    // const handleDesc = (e)=>{
    //     setDesc(e.target.value);
    // }

    // const handleCat = (e)=>{
    //     setCat(e.target.value);
    //     console.log(e.target.value + "changed" + cat);
       
    // }
    return ( 
        <form className="mx-5 px-10" onSubmit={(e)=>{
            e.preventDefault();
            // let formData = new FormData(e.target);
            // let name = formData.get('taskName');
            // let description = formData.get('taskDes');
            submit(name,icon);
        }}>
            <h2 className="font-poppins text-3xl font-bold text-blue-900">Add Group</h2>
            <label htmlFor="name" className="p-2 font-poppins font-bold text-indigo-900">Name</label>
            <input type="text" id="name" name="taskName" className="p-2 m-2 w-full" required
            placeholder="Group name . . ."
            value={name}  
            onChange={handleName}
            />

            <label  className="p-2 font-poppins font-bold text-indigo-900">Icons</label>
            <div className="flex justify-around gap-1 p-2">
              {
                icons.map((iconInList,index)=>{
                    return(
                        <div 
                        onClick={()=>{
                            setIcon(index);
                        }}
                        key={index} className={`text-blue-900 w-9 h-9 cursor-pointer bg-slate-300 border-2 hover:scale-105 active:scale-95 hover hover-selected border-white ${icon === index && 'color-selected'}`}>
                            <FontAwesomeIcon icon={iconInList} className="w-full h-full scale-90"/>
                        </div>
                    )
                })
              }
            </div>
        
            <button type="submit" className="block mx-auto bg-sky-900 font-poppins rounded-sm font-bold p-2 m-4 shadow-md relative text-sky-300 hover:scale-105 active:scale-95">Add Group</button>
        </form>
     );
}
 
export default AddGroupForm;