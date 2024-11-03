import React from 'react'

const EmployeeTasks = ({data}) => {
  return (
    <div className='w-full flex flex-wrap flex-shrink-0 gap-4 items-center justify-between z-10 '>



        {
            data.tasks.map((elem, index)=>{
                return(
                    <div key={index} className=' relative flex-1 flex flex-col justify-start  min-h-60 max-lg:min-w-[250px] lg:min-w-[600px] bg-slate-800/60 hover:shadow-2xl hover:shadow-slate-800 hover:scale-[1.01] transition-all ease-in-out cursor-pointer rounded-lg px-6 py-5'>
                            <div className='flex justify-between items-end'>
                                <button className='px-4 py-1 bg-red-600 rounded-md font-semibold text-lg'>
                                    {elem.category}
                                </button>
                                <h1 className='font-semibold text-lg'>{elem.date}</h1>
                            </div>
                            <h1 className='text-2xl  font-semibold mt-3'>{elem.title}</h1>
                            <p className='text-xl font-light leading-tight tracking-wide mt-4'>{elem.description}</p>

                            

                                
                                <button className=' absolute bottom-4 right-4 px-4 py-1 bg-green-400 rounded-md font-semibold text-lg'>
                                        {elem.completed ? "completed" : "failed"} 
                                        {/* remaining */}
                                </button>
                               
                            
                     </div>
                )
            })
        }

           
            
          
            

           
           
        </div>
  )
}

export default EmployeeTasks