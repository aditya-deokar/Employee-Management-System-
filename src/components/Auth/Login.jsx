import React, { useState } from 'react'

const Login = () => {


   const [email ,setEmail] = useState("");
   const [password ,setPassword] = useState("");


    const submitHandler = (e)=>{
        e.preventDefault();

        console.log('Eamil', email);
        console.log('pass', password);

        setEmail("");
        setPassword("");
    }



  return (
    <div className='w-full max-sm:p-4 h-screen bg-slate-950 text-white flex items-center justify-center '>

        <div className='w-96 h-96 rounded-full bg-emerald-900 blur-[100px] absolute top-1/3 right-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        <div className='w-40 h-40 rounded-full bg-emerald-950 blur-[80px] absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2'></div>


        <div className='bg-slate-950/65 shadow-md shadow-slate-900 rounded-3xl max-sm:w-full  w-1/2 h-1/2 flex items-center justify-center relative'>

            <form
            onSubmit={ (e)=>{
                submitHandler(e);
            }
            }
            className='w-full flex flex-col items-center justify-center gap-3 text-xl'>



                <input 
                        type='email'
                        onChange={
                            (e)=>{
                                // console.log(e.target.value);
                                setEmail(e.target.value);
                            }
                        }
                        value={email}
                        required 
                        className='w-1/2 max-sm:w-2/3 border-2 placeholder-gray-600 border-emerald-800 outline-none bg-transparent px-4 py-2 rounded-2xl' 
                        placeholder='Enter your email' 
                 />


                <input 
                        type="password"
                        onChange={
                            (e)=>{
                            setPassword(e.target.value);
                            // console.log(e.target.value)
                        }}

                        value={password}
                        required 
                        className='w-1/2 max-sm:w-2/3 border-2 placeholder-gray-600 border-emerald-800 outline-none bg-transparent px-4 py-2 rounded-2xl'  placeholder='Enter password'
                />

                <div className='w-1/2 max-sm:w-2/3 flex justify-between text-sm max-sm:p-0 p-2'>
                    <p >
                        <input type="checkbox" className='accent-emerald-800  hover:accent-emerald-300' name="rembMe" id="rembme" /> Remember me
                    </p>
                    <p className='text-emerald-800 cursor-pointer hover:text-emerald-400 ease-in transition-all '>Forget Password?</p>
                </div>
            
                <button className='w-1/2 max-sm:w-2/3 mt-6 text-emerald-800 border-2 border-emerald-800  py-2 px-5 rounded-2xl hover:text-white hover:bg-emerald-800 transition-all ease-in-out'>
                    Login
                </button>
            </form>

        </div>
    </div>
  )
}

export default Login