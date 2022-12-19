const SidebarButton = ({name,renderIcon,click}) => {
    return ( 
        <div onClick={click} className="flex items-center group hover:bg-opacity-30 hover:bg-blue-800  rounded-md cursor-pointer mx-1">
            <button className="text-sky-200 text-3xl bg-blue-600 p-4 rounded-lg group-hover:rounded-2xl transition-all ">{renderIcon()}</button>
            <h2 className="mx-4  font-poppins text-blue-200 text-xl font-bold hover-show">{name}</h2>
        </div>

  
     );
}
 
export default SidebarButton;