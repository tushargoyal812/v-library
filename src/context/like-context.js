import { createContext, useContext, useState } from "react";


const LikeContext=createContext()


const LikeProvider=({children})=>{
    const [videoDetail,setVideoDetail]=useState({})
    const [like,setLike]=useState([])
    const [display,setDisplay]=useState("")
    return <LikeContext.Provider value={{videoDetail,setVideoDetail,like,setLike,display,setDisplay}}>{children}</LikeContext.Provider>
}


const useLike=()=>useContext(LikeContext)


export {LikeProvider,useLike}