import ColorList from "./ColorList";

const Task = ({task,completed, remove, update}) => {

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

    let color = task.color !== undefined ? `color-${ColorList()[task.color]}` : 'bg-sky-500';
    return ( 
        <div className={`${!task.finished ?  color : 'bg-emerald-500'} task p-2 text-sky-100 text-center my-4 mx-auto px-9 max-w-full overflow-hidden shadow-sm rounded-md hover:shadow-lg border-2 ${task.finished ? ' border-slate-200 border-dashed' : 'border-slate-700'} inset-5 hover:translate-x-3 transition-all hover:outline`} >
            <h2 className="font-poppins text-2xl font-bold text-sky-900 my-0 break-words">{task.taskName}</h2>
            <p className="font-poppins text-slate-800 text-xs font-light">
             {task.hasOwnProperty('created') && task.created} 
             {task.category ?' - ' :''} 
             <span className="font-bold text-sky-900">{task.category}</span>
             </p>
            <p className="font-poppins font-medium break-words">{task.taskDes}</p>
            
            <button className="bg-sky-800 shadow-md text-xs hover:scale-110 active:scale-95 p-2 m-2 font-bold font-poppins rounded-sm transition-all" onClick={completed}>{task.finished? 'Cancel' :'Completed'}</button>
            <button className="bg-slate-600 shadow-md text-xs hover:scale-110 active:scale-95 p-2 m-2 font-bold font-poppins rounded-sm transition-all" onClick={update}>Edit</button>
            <button className="bg-rose-500 shadow-md text-xs hover:bg-rose-600 hover:scale-110 active:scale-95 p-2 m-2 font-bold font-poppins rounded-sm transition-all" onClick={animateExit}>Remove</button>
        </div> 
     );
}
 
export default Task;