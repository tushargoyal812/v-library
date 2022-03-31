import { createContext, useContext, useState } from "react";


const VideoContext=createContext()


const VideoProvider=({children})=>{
    const [videoItem,setVideoItem]=useState([])
    const [watchLater,setWatchLater]=useState([])
    return <VideoContext.Provider value={{videoItem,setVideoItem,watchLater,setWatchLater}}>{children}</VideoContext.Provider>
}

const useVideo=()=>useContext(VideoContext)


export {VideoProvider,useVideo}