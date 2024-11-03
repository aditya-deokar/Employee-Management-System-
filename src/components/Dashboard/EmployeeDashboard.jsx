import React from 'react'
import Header from '../others/Header'
import EmployeeTasks from '../others/EmployeeTasks'
import EmployeeAchivement from '../others/EmployeeAchivement'
import ParticularTask from '../TaskList/ParticularTask'

const EmployeeDashboard = ({data}) => {
  return (
    <section className='w-full  min-h-screen max-sm:px-4 px-12 py-6 bg-slate-900 text-white flex flex-col justify-start gap-3 items-center'>

        <Header data={data}/>

        <EmployeeAchivement  data={data}/>

        <div className='flex flex-col w-full justify-start'>
          <h1 className='text-2xl mb-4'>New Tasks</h1>
          {
          data.tasks.map((elem,id)=>{
                if(elem.newTask == true){
                  return <ParticularTask key={id} data={[elem]} />
                }

          })
        }
        </div>



        
        <div className='flex flex-col gap-4 w-full justify-start'>
            <h1 className='text-2xl mt-2'>Active Tasks</h1>
            {
              data.tasks.map((elem,idx)=>{
                if(elem){
                  return <ParticularTask key={idx} data={[elem]}/>
                }
              })
            }
           
            
        </div>
        
        <div className='flex flex-col w-full justify-start'>
            <h1 className='text-2xl mt-4 mb-2'>All Tasks</h1>
            <EmployeeTasks data={data}/>
        </div>

    <div className='absolute w-52 h-[100vh] blur-[160px] max-sm:rotate-12 rotate-45 bg-teal-600/85 z-0'></div>
    </section>
  )
}

export default EmployeeDashboard