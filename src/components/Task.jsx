const Task = ({task,completed, remove}) => {

    const animateExit= (e)=>{
        
        let animation =  e.target.parentNode.animate([
            { transform:'translateX(0)',opacity:1,},
            {transform:'translateX(40px)',opacity:0}
        ],
        {
            duration:250,
            fill:'forwards',
            ease:'easein'
        });

        e.target.disabled = true;
        animation.addEventListener('finish',()=>{
            remove();
        });
    };
    return ( 
        <div className={`${!task.finished ?  'bg-sky-500' : 'bg-emerald-500'} task p-2 text-sky-100 text-center my-4 mx-auto shadow-sm rounded-md hover:shadow-lg border-2 border-slate-700 inset-5 hover:translate-x-3 transition-all hover:outline`} >
            <h2 className="font-poppins text-xl font-bold text-sky-900 my-0">{task.taskName}</h2>
            <p className="font-poppins">{task.taskDes}</p>
            
            <button className="bg-sky-800 hover:scale-110 active:scale-95 p-2 m-2 font-bold font-poppins rounded-sm transition-all" onClick={completed}>Completed</button>
            <button className="bg-rose-500 hover:bg-rose-700 hover:scale-110 active:scale-95 p-2 m-2 font-bold font-poppins rounded-sm transition-all" onClick={animateExit}>Remove</button>
        </div> 
     );
}
 
export default Task;