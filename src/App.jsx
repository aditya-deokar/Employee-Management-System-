import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {


  const Authdata=useContext(AuthContext);
  // console.log(Authdata.employees);
  setLocalStorage();
  


  const [user, setUser] = useState('');
  const [loginUser, setLoginUser] = useState('');

  const handleLogin= (email , password)=>{
    

    if(email=="admin@example.com" && password=="123")
    {
      let admin =Authdata.admin.find((e)=>email==e.email && password==e.password)
      setUser("admin");
      setLoginUser(admin);
    }else if(Authdata)
    {
      let employee=Authdata.employees.find((e)=>email ==e.email && e.password==password)
     if(employee){
      setUser("employee");
      setLoginUser(employee);
      console.log(employee)
     }
    }else{
      alert("Invalide Details!");
    }
    
  }

 
 
  


  return (
    <>
    
      

        { !user ? <Login handleLogin={handleLogin} />:'' }
        { user=="admin" ? <AdminDashboard data={loginUser} />:'' }
        { user=="employee" ? <EmployeeDashboard data={loginUser} />:''  }
          
  
    
    </>
  )
}

export default App
