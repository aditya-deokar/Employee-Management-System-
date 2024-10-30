import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {


  const Authdata=useContext(AuthContext);
  console.log(Authdata.employees);


  const [user, setUser] = useState('');

  const handleLogin= (email , password)=>{
    

    if(email=="admin@example.com" && password=="123")
    {
      setUser("admin");
    }else if(Authdata && Authdata.employees.find((e)=>email ==e.email && e.password==password))
    {
      setUser("employee");
    }else{
      alert("Invalide Details!");
    }
    
  }

 
 
  


  return (
    <>
    
      

        { !user ? <Login handleLogin={handleLogin} />:'' }
        { user=="admin" ? <AdminDashboard />:'' }
        { user=="employee" ? <EmployeeDashboard />:''  }
          
  
    
    </>
  )
}

export default App
