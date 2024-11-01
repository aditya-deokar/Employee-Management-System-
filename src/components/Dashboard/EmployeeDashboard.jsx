import React from 'react'
import Header from '../others/Header'
import EmployeeTasks from '../others/EmployeeTasks'
import EmployeeAchivement from '../others/EmployeeAchivement'

const EmployeeDashboard = ({data}) => {
  return (
    <section className='w-full  min-h-screen max-sm:px-4 px-12 py-6 bg-slate-900 text-white flex flex-col justify-start gap-3 items-center'>

        <Header data={data}/>

        <EmployeeAchivement />
        <EmployeeTasks/>


    <div className='absolute w-52 h-[100vh] blur-[160px] max-sm:rotate-12 rotate-45 bg-teal-600/85 z-0'></div>
    </section>
  )
}

export default EmployeeDashboard