
const Modal = ({isOpen,onHide,children}) => {
    const closeButton = ()=>{
        return  <button onClick={onHide} className="block bg-rose-400 font-poppins rounded-sm font-bold p-2 m-4 shadow-md relative text-red-900"> X </button>;
    }
    return (
      <>
        {isOpen && (
          <div className="bg-slate-800 fixed w-full h-full z-50 flex justify-center items-center  modal">
              <div className="panel bg-blue-600 ">
                    <div className="action w-100 flex justify-end">
                        {closeButton()}
                    </div>
                  {children}
                  
              </div>
          </div>
        )}
      </>
     );
}
 
export default Modal;