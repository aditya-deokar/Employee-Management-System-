import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext= createContext();

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState('')

  

  useEffect(() => {
   
    const {employees ,admin}=getLocalStorage();
    // console.log(employees,admin);
    setUserData({employees,admin})
  
  }, [])
  

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider