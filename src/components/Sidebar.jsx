import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup,faNoteSticky ,faPlus} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return ( 
        <div className="sidebar shadow-lg bg-slate-700 h-screen flex flex-col justify-items-stretch md:hover:w-80^">
            <div className="section w-full py-2 px-1 bg-blue-600">
                <div className="flex items-center">
                    <button className=""><FontAwesomeIcon icon={faLayerGroup} className='text-sky-200 text-2xl bg-blue-900 p-4 rounded-lg hover:rounded-2xl transition-all' /></button>
                    <h2 className="mx-4 whitespace-nowrap font-poppins text-blue-200 text-2xl font-bold hover-show">Task Group</h2>
                </div>
            </div>
            <div className="group-list p-1 py-4 grid gap-4 overflow-auto overflow-x-hidden">
                <div className="flex items-center bg-opacity-75 hover:bg-blue-800  rounded-md cursor-pointer mx-1">
                    <button className="text-sky-200 text-3xl bg-blue-600 p-4 rounded-lg hover:rounded-2xl transition-all "><FontAwesomeIcon icon={faNoteSticky}/></button>
                    <h2 className="mx-4  font-poppins text-blue-200 text-xl font-bold hover-show">Group Name 1</h2>
                </div>
                <div className="flex items-center bg-opacity-75 hover:bg-blue-800  rounded-md cursor-pointer mx-1">
                    <button className="text-sky-200 text-3xl bg-blue-600 p-4 rounded-lg hover:rounded-2xl transition-all "><FontAwesomeIcon icon={faNoteSticky}/></button>
                    <h2 className="mx-4  font-poppins text-blue-200 text-xl font-bold hover-show">Group Name 1</h2>
                </div> <div className="flex items-center bg-opacity-75 hover:bg-blue-800  rounded-md cursor-pointer mx-1">
                    <button className="text-sky-200 text-3xl bg-blue-600 p-4 rounded-lg hover:rounded-2xl transition-all "><FontAwesomeIcon icon={faNoteSticky}/></button>
                    <h2 className="mx-4  font-poppins text-blue-200 text-xl font-bold hover-show">Group Name 1</h2>
                </div> <div className="flex items-center bg-opacity-75 hover:bg-blue-800  rounded-md cursor-pointer mx-1">
                    <button className="text-sky-200 text-3xl bg-blue-600 p-4 rounded-lg hover:rounded-2xl transition-all "><FontAwesomeIcon icon={faPlus}/></button>
                    <h2 className="mx-4  font-poppins text-blue-200 text-xl font-bold hover-show">Add Group</h2>
                </div>
               
            </div>

        </div>
     );
}
 
export default Sidebar;