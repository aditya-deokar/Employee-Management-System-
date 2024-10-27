
import { IoArrowBackCircleOutline } from "react-icons/io5";
import AllTask from "../others/AllTask";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";

const AdminDashboard = () => {
  return (
   <section className="w-full  min-h-screen max-sm:px-4 px-12 py-6 bg-slate-900 text-white flex flex-col justify-start gap-3 items-center">
         
         <Header/>


        <div className="w-full text-white text-2xl mt-4 pt-2 flex items-center border-t-2 border-slate-800 gap-4"> 
            <IoArrowBackCircleOutline />
            <h1>Create Task</h1>
        </div>


        <div className="w-full flex max-sm:flex-col gap-4">

            <CreateTask/>

            <div className="w-1/2 max-sm:w-full bg-slate-800 rounded-md h-[70vh] p-3">
                <h1 className="text-3xl font-semibold p-1 border-b-2 border-slate-700">All Tasks</h1>

                <AllTask />
            </div>

        </div>


   </section>
  )
}

export default AdminDashboard
