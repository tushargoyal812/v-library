import { createContext, useContext, useState } from "react";


const AuthContext=createContext()


const AuthProvider=({children})=>{
    const [auth,setAuth]=useState(localStorage.getItem("user"))
    const [category,setCategory]=useState([])
    const [sentCategory,setSentCategory]=useState([])
    return(<AuthContext.Provider value={{auth,setAuth,category,setCategory,sentCategory,setSentCategory}}>{children}</AuthContext.Provider>)
}


const useAuth=()=>useContext(AuthContext)


export {useAuth,AuthProvider}