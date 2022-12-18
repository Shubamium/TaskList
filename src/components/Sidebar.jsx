import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
    return ( 
        <div className="sidebar shadow-lg bg-slate-700">
            <div className="section w-full py-2 px-1 bg-blue-600">
                <button className=""><FontAwesomeIcon icon={faLayerGroup} /></button>
                <h2 className="font-poppins text-blue-400 text-lg font-bold">Task Group</h2>
                <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" />
                <FontAwesomeIcon icon="fa-solid fa-layer-group" />
            </div>
            <button>222</button>
            <button>3</button>
        </div>
     );
}
 
export default Sidebar;