import { createContext, useContext, useState } from "react";


const PlaylistContext=createContext()


const PlaylistProvider=({children})=>{
    const [playlist,setPlaylist]=useState([])
    const [playlistName,setPlaylistName]=useState(false)
    const [playlistInput,setPlaylistInput]=useState()
    const [modal,setModal]=useState(false)
    const [sentPlayList,setSentPlayList]=useState(null)
    return (<PlaylistContext.Provider value={{playlist,setPlaylist,playlistName,setPlaylistName,playlistInput,setPlaylistInput,modal,setModal,sentPlayList,setSentPlayList}}>{children}</PlaylistContext.Provider>)
}

const usePlaylist=()=>useContext(PlaylistContext)


export {PlaylistProvider,usePlaylist}