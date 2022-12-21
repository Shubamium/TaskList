import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup,faNoteSticky ,faPlus, faList, faEdit, faX, faCancel} from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "./SidebarButton";
import Modal from "./Modal";

import AddGroupForm from "./AddGroupForm";
import { useState } from "react";
import IconList from "./IconList";
import ColorList from "./ColorList";
const Sidebar = ({groups, addGroup, removeGroup, showAll,showGroup}) => {

    let [groupAddModal,setGroupAddModal] = useState(false);
    let [editMode,setEditMode] = useState(false);

    let showGroupButtons = groups.map((group)=>(
        <SidebarButton 
        click={
            ()=>{
                showGroup(group.group);
            }
        }
        iconBgColor={group.color !== undefined ? `color-${ColorList()[group.color]} ` : undefined}
        name={group.group} key={group.id} renderIcon={()=><FontAwesomeIcon icon={ group.icon === undefined ? faNoteSticky : IconList()[group.icon] }/>}/>
    ));

    let editGroupButtons = groups.map((group)=>(
        <SidebarButton 
        click={()=>{
            removeGroup(group.id);
        }}
        name={group.group} key={group.id} renderIcon={()=><FontAwesomeIcon icon={faX} />} iconBgColor="bg-rose-600"/>
    ));
    return (
        <>
        <div className="panel-offset">
             <Modal isOpen={groupAddModal} onHide={()=>setGroupAddModal(false)}>
                <AddGroupForm submit={(name,icon,color)=>{
                    setGroupAddModal(false);
                    addGroup(name,icon,color);
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
               <SidebarButton name="All Tasks" iconBgColor="bg-rose-800" renderIcon={()=><FontAwesomeIcon icon={faList}/>} click={()=>showAll()}/>
               <SidebarButton name="Add Group" iconBgColor="bg-indigo-600" renderIcon={()=><FontAwesomeIcon icon={faPlus}/>} click={()=>setGroupAddModal(true)}/>
               <SidebarButton name={editMode ? "Cancel" : "Edit Group"} iconBgColor="bg-indigo-600" renderIcon={()=><FontAwesomeIcon icon={editMode ? faCancel : faEdit }/>} click={()=>setEditMode((prev)=> !prev)}/>
               {editMode ? editGroupButtons : showGroupButtons}
            </div>

        </div>
        </> 
        
     );
}
 
export default Sidebar;