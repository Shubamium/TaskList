
const Modal = ({isOpen,onHide,children}) => {

    return (
      <>
        {isOpen && (
          <div className="bg-slate-800 absolute w-full h-full z-50 flex justify-center items-center opacity-0 modal">
              <div className="panel  bg-blue-600 ">
                  {children}
                  <button onClick={onHide} className="bg-rose-800">Close</button>
              </div>
          </div>
        )}
      </>
     );
}
 
export default Modal;