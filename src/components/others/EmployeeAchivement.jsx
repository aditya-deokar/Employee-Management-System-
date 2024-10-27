import React from 'react'

const EmployeeAchivement = () => {
  return (
    <div className='flex w-full gap-5 flex-wrap py-10 z-10 '> 
            <div className='max-sm:flex-none flex-1 bg-yellow-300 sm:w-[200px] w-full rounded-[20px] hover:shadow-2xl hover:shadow-slate-800 hover:skew-x-1 transition-all ease-in-out cursor-pointer max-sm:p-4 px-10 py-10'>
                <span className='text-6xl max-sm:text-3xl font-semibold'>01</span>
                <h1 className='text-3xl max-sm:text-xl font-semibold'>New Task</h1>
            </div>
            <div className='flex-1 bg-blue-400 sm:w-[200px] w-full rounded-[20px] hover:shadow-2xl hover:shadow-slate-800 hover:skew-y-1 transition-all ease-in-out cursor-pointer max-sm:p-4 px-10 py-10'>
                <span className='text-6xl max-sm:text-3xl font-semibold'>02</span>
                <h1 className='text-3xl max-sm:text-xl font-semibold'>Completed</h1>
            </div>
            <div className='flex-1 bg-green-400 sm:w-[200px] w-full rounded-[20px] hover:shadow-2xl hover:shadow-slate-800 hover:skew-x-1 transition-all ease-in-out cursor-pointer max-sm:p-4 px-10 py-10'>
                <span className='text-6xl max-sm:text-3xl font-semibold'>01</span>
                <h1 className='text-3xl max-sm:text-xl font-semibold'>Accepted</h1>
            </div>
            <div className='flex-1 bg-orange-400 sm:w-[200px] w-full rounded-[20px] hover:shadow-2xl hover:shadow-slate-800 hover:skew-y-1 transition-all ease-in-out cursor-pointer max-sm:p-4 px-10 py-10'>
                <span className='text-6xl max-sm:text-3xl font-semibold'>01</span>
                <h1 className='text-3xl max-sm:text-xl font-semibold'>Failed</h1>
            </div>
         
           
        </div>

  )
}

export default EmployeeAchivement