import { createContext, useContext, useState } from "react";


const VideoContext=createContext()


const VideoProvider=({children})=>{
    const [videoItem,setVideoItem]=useState([])
    const [watchLater,setWatchLater]=useState([])
    const [history,setHistory]=useState([])
    return <VideoContext.Provider value={{videoItem,setVideoItem,watchLater,setWatchLater,history,setHistory}}>{children}</VideoContext.Provider>
}

const useVideo=()=>useContext(VideoContext)


export {VideoProvider,useVideo}