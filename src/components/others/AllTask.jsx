import { useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  

  
  const Authdata=useContext(AuthContext);
  const EmpData= Authdata.employees;
  // console.log(EmpData)

 
  return (
    <div className='relative flex flex-col gap-3 p-4'>

      <div className="grid  grid-cols-4 text-md px-3 py-2 bg-slate-900">
        <h1>Name</h1>
        <h1>task </h1>
        <h1>Completed</h1>
        <h1>Failed</h1>
      </div>

        {
          EmpData.map((elem,index)=>{
             return (
              elem.tasks.map((el,id)=>{
                return (
                  <div key={id} className='grid grid-cols-4 text-sm border-2 bg-slate-700 w-full max-sm:px-1 px-3 py-2 rounded-md justify-between items-center'>
                    <h1>{elem.firstName}</h1>
                    <h1>{el.title}</h1>
                    <h1>{el.completed ? "completed":"failed"}</h1>
                    <h1>{el.active ? "Active":"Not Active"}</h1>
                  </div>
                )
              })
             )
          })
        }
    
        
{/*        
       
        <div className='flex border-2 border-emerald-600 w-full px-3 py-2 rounded-md justify-between items-center'>
            <h1>Aditya</h1>
            <h1>Task Name</h1>
            <h1>status</h1>
        </div> */}
       
    </div>
  )
}

export default AllTask