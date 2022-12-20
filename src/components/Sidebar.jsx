import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup,faNoteSticky ,faPlus, faList} from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "./SidebarButton";
import Modal from "./Modal";

import AddGroupForm from "./AddGroupForm";
import { useState } from "react";
const Sidebar = ({groups, addGroup}) => {

   
  let [groupAddModal,setGroupAddModal] = useState(false);

    return (
        <>
        <div className="panel-offset">
             <Modal isOpen={groupAddModal} onHide={()=>setGroupAddModal(false)}>
                <AddGroupForm submit={(name)=>{
                    setGroupAddModal(false);
                    addGroup(name);
                }}/>
             </Modal>
        </div>
        <div className="sidebar shadow-2xl bg-gray-800 h-screen flex flex-col justify-items-stretch md:hover:w-80^">
            
            <div className="header w-full py-2 px-2 bg-blue-600">
                <div className="flex items-center">
                    <button className=""><FontAwesomeIcon icon={faLayerGroup} className='text-sky-200 text-2xl bg-blue-900 p-4 rounded-lg 2xl transition-all' /></button>
                    <h2 className="mx-4 whitespace-nowrap font-poppins text-blue-200 text-2xl font-bold hover-show">Task Group</h2>
                </div>
            </div>
            <div className="group-list p-1 py-4 grid gap-4 overflow-auto overflow-x-hidden">
               <SidebarButton name="All Tasks" iconBgColor="bg-rose-800" renderIcon={()=><FontAwesomeIcon icon={faList}/>}/>
               <SidebarButton name="Add Group" iconBgColor="bg-indigo-600" renderIcon={()=><FontAwesomeIcon icon={faPlus}/>} click={()=>setGroupAddModal(true)}/>
               {groups.map((group)=>(
                    <SidebarButton name={group.group} key={group.id} renderIcon={()=><FontAwesomeIcon icon={faNoteSticky}/>}/>
               ))}
            </div>

        </div>
        </> 
        
     );
}
 
export default Sidebar;