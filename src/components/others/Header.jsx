import React from 'react'
import Login from '../Auth/Login'

const Header = ({data}) => {
  console.log(data)
  return (
    <div className='w-full flex justify-between items-end z-10'>
            <h1 className='text-2xl'>Hello, <br></br> 
            <span className='text-4xl font-semibold capitalize'>{data.firstName} 👋</span>
            <span className='text-sm block font-extralight'>{data.email}</span>
            </h1>


            <button className='px-3 py-2 bg-red-600 rounded-lg hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header