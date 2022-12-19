import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup,faNoteSticky ,faPlus} from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "./SidebarButton";
const Sidebar = () => {
    return ( 
        <div className="sidebar shadow-lg bg-gray-800 h-screen flex flex-col justify-items-stretch md:hover:w-80^">
            <div className="section w-full py-2 px-2 bg-blue-600">
                <div className="flex items-center">
                    <button className=""><FontAwesomeIcon icon={faLayerGroup} className='text-sky-200 text-2xl bg-blue-900 p-4 rounded-lg 2xl transition-all' /></button>
                    <h2 className="mx-4 whitespace-nowrap font-poppins text-blue-200 text-2xl font-bold hover-show">Task Group</h2>
                </div>
            </div>
            <div className="group-list p-1 py-4 grid gap-4 overflow-auto overflow-x-hidden">
               <SidebarButton name="Group 1" renderIcon={()=><FontAwesomeIcon icon={faNoteSticky}/>}/>
               <SidebarButton name="Group 2" renderIcon={()=><FontAwesomeIcon icon={faNoteSticky}/>}/>
               <SidebarButton name="Add Group" renderIcon={()=><FontAwesomeIcon icon={faPlus}/>}/>
            </div>

        </div>
     );
}
 
export default Sidebar;