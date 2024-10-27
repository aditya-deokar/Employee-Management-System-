import React from 'react'

const CreateTask = () => {
  return (
            <form className="flex flex-wrap max-sm:gap-3 max-sm:p-3 gap-6 max-sm:w-full w-1/2 p-10 text-xl">
                <div className="w-full ">
                    <label htmlFor="task-title" className="text-xl">Task Title</label>
                    <input type="text" id="task-title" name="task-title" className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>
                <div className="w-full ">
                    <label htmlFor="task-desc" className="text-xl">Description</label>
                    <textarea className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>

                <div className=" max-sm:w-full w-1/2  flex flex-col ">
                    <label htmlFor="task-date" className="text-xl">Date</label>
                    <input type="date" id="task-date" name="task-date" className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>
                <div className="max-sm:w-full w-1/2 flex-1 flex flex-col ">
                    <label htmlFor="assign" className="text-xl">Assign To</label>
                    <input type="text" id="assign" name="assign" className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>
                <div className="max-sm:w-full w-full  flex flex-col ">
                    <label htmlFor="task-cate" className="text-xl">Category</label>
                    <input type="text" id="task-cate" name="task-cate" className="w-full p-2 rounded-md bg-slate-800 outline-none" />
                </div>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all ease-in mt-5 py-3 rounded-lg">Create Task</button>

        </form> 
  )
}

export default CreateTask