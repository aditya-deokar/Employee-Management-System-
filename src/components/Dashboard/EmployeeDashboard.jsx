import React from 'react'

const EmployeeDashboard = () => {
  return (
    <section className='w-full  min-h-screen max-sm:px-4 px-12 py-6 bg-slate-900 text-white flex flex-col justify-start gap-3 items-center'>

        <div className='w-full flex justify-between items-end z-10'>
            <h1 className='text-2xl'>Hello, <br></br> <span className='text-4xl font-semibold'>Aditya👋</span></h1>

            <button className='px-3 py-2 bg-red-600 rounded-xl hover:bg-red-700'>Log Out</button>
        </div>

        <div className='flex w-full gap-5 flex-wrap py-10 z-10'> 
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

        <div className='w-full flex flex-wrap flex-shrink-0 gap-4 items-center justify-between z-10'>

            <div className='flex-1 flex flex-col justify-start max-lg:min-w-[250px] lg:min-w-[600px] bg-slate-800/60 hover:shadow-2xl hover:shadow-slate-800 hover:scale-[1.01] transition-all ease-in-out cursor-pointer rounded-lg px-6 py-5'>
                <div className='flex justify-between items-end'>
                    <button className='px-4 py-1 bg-red-600 rounded-md font-semibold text-lg'>
                        high
                    </button>
                    <h1 className='font-semibold text-lg'>27 Oct 2024</h1>
                </div>
                <h1 className='text-2xl  font-semibold mt-3'>Example task</h1>
                <p className='text-xl font-light leading-tight tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, iure!</p>
            </div>
            
            <div className='flex-1 flex flex-col justify-start max-lg:min-w-[250px] lg:min-w-[600px] bg-slate-800/45 hover:shadow-2xl hover:shadow-slate-800 hover:scale-[1.01] transition-all ease-in-out cursor-pointer rounded-lg px-6 py-5'>
                <div className='flex justify-between items-end'>
                    <button className='px-4 py-1 bg-red-600 rounded-md font-semibold text-lg'>
                        high
                    </button>
                    <h1 className='font-semibold text-lg'>27 Oct 2024</h1>
                </div>
                <h1 className='text-2xl  font-semibold mt-3'>Example task</h1>
                <p className='text-xl font-light leading-tight tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, iure!</p>
            </div>
            
            <div className='flex-1 flex flex-col justify-start max-lg:min-w-[250px] lg:min-w-[600px] bg-slate-800/45 hover:shadow-2xl hover:shadow-slate-800 hover:scale-[1.01] transition-all ease-in-out cursor-pointer rounded-lg px-6 py-5'>
                <div className='flex justify-between items-end'>
                    <button className='px-4 py-1 bg-red-600 rounded-md font-semibold text-lg'>
                        high
                    </button>
                    <h1 className='font-semibold text-lg'>27 Oct 2024</h1>
                </div>
                <h1 className='text-2xl  font-semibold mt-3'>Example task</h1>
                <p className='text-xl font-light leading-tight tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, iure!</p>
            </div>
            
            <div className='flex-1 flex flex-col justify-start h-full max-lg:min-w-[250px] lg:min-w-[600px] bg-slate-800/60 hover:shadow-2xl hover:shadow-slate-800 hover:scale-[1.01] transition-all ease-in-out cursor-pointer rounded-lg px-6 py-5'>
                <div className='flex justify-between items-end'>
                    <button className='px-4 py-1 bg-red-600 rounded-md font-semibold text-lg'>
                        high
                    </button>
                    <h1 className='font-semibold text-lg'>27 Oct 2024</h1>
                </div>
                <h1 className='text-2xl  font-semibold mt-3'>Example task</h1>
                <p className='text-xl font-light leading-tight tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, iure!</p>
            </div>
            
            <div className='flex-1 flex flex-col justify-start max-lg:min-w-[250px] lg:min-w-[600px] bg-slate-800/45 hover:shadow-2xl hover:shadow-slate-800 hover:scale-[1.01] transition-all ease-in-out cursor-pointer rounded-lg px-6 py-5'>
                <div className='flex justify-between items-end'>
                    <button className='px-4 py-1 bg-red-600 rounded-md font-semibold text-lg'>
                        high
                    </button>
                    <h1 className='font-semibold text-lg'>27 Oct 2024</h1>
                </div>
                <h1 className='text-2xl  font-semibold mt-3'>Example task</h1>
                <p className='text-xl font-light leading-tight tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, iure!</p>
            </div>
            

           
           
        </div>


    <div className='absolute w-52 h-[100vh] blur-[160px] max-sm:rotate-12 rotate-45 bg-teal-600/85 z-0'></div>
    </section>
  )
}

export default EmployeeDashboard