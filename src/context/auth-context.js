import { createContext, useContext, useState } from "react";


const AuthContext=createContext()


const AuthProvider=({children})=>{
    const [auth,setAuth]=useState(localStorage.getItem("user"))
    return(<AuthContext.Provider value={{auth,setAuth}}>{children}</AuthContext.Provider>)
}


const useAuth=()=>useContext(AuthContext)


export {useAuth,AuthProvider}