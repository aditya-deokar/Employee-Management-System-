import { useContext, useState } from "react";
import  { AuthContext } from "../../context/AuthProvider"
import { setLocalStorage } from "../../utils/localStorage";

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({});
   

    const AuthData=useContext(AuthContext);
    const Auth=AuthData.employees;
    // console.log(Auth);

    const data=JSON.parse(localStorage.getItem('employees'))

    const submitHandler =(e)=>{
        e.preventDefault();
        // console.log(taskDate , taskDesc ,taskTitle , category, assignTo)

        setNewTask({ 
            // "taskId": 101,
            "title": taskTitle,
            "description": taskDesc,
            "date": taskDate,
            "category": category,
            "active": false,
            "newTask": true,
            "failed": false,
            "completed": false
        })

        data.map((elem,i)=>{
            if(elem.firstName==assignTo){
                // console.log(elem.tasks);
                // console.log(newTask);
                elem.tasks.push({newTask})
            }
        })

        setTaskTitle('');
        setTaskDesc('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');

    }
    
  return (
            <form 
                onSubmit={(e)=>{
                    submitHandler(e);
                    }
                }
                 className="flex flex-wrap max-sm:gap-3 max-sm:p-3 gap-6 max-sm:w-full w-1/2 p-10 text-xl">

                <div className="w-full ">
                    <label htmlFor="task-title" className="text-xl">Task Title</label>
                    <input
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value);
                    }}
                    type="text" id="task-title" name="task-title" className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>
                <div className="w-full ">
                    <label htmlFor="task-desc" className="text-xl">Description</label>
                    <textarea
                    value={taskDesc}
                    onChange={(e)=>{
                        setTaskDesc(e.target.value);
                    }}
                    className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>

                <div className=" max-sm:w-full w-1/2  flex flex-col ">
                    <label htmlFor="task-date" className="text-xl">Date</label>
                    <input
                    value={taskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value);
                    }}
                    type="date" id="task-date" name="task-date" className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>
                <div className="max-sm:w-full w-1/2 flex-1 flex flex-col ">
                    <label htmlFor="assign" className="text-xl">Assign To</label>
                    <select value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value);
                    }}
                    className="w-full p-2 rounded-md bg-slate-800 outline-none" name="assign" id="assign">
                        <option value="">select</option>
                        {
                            Auth.map((elem,id)=>{
                                return(
                                    <option key={id} value={elem.firstName}>{elem.firstName}</option>
                                )
                            })
                        }
                       
                    </select>
                </div>
                <div className="max-sm:w-full w-full  flex flex-col ">
                    <label htmlFor="task-cate" className="text-xl">Category</label>
                    <input value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value);
                    }} 
                    type="text" id="task-cate" name="task-cate" className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all ease-in mt-5 py-3 rounded-lg">Create Task</button>

        </form> 
  )
}

export default CreateTask