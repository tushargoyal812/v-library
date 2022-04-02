import axios from "axios"
import { useEffect } from "react"
import './playlist.css'
import { Navbar } from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/sidebar"
import { usePlaylist } from "../../context/playlist-context"
import { Link,useParams } from "react-router-dom"

export const PlayList=()=>{
    const {playlist,setPlaylist}=usePlaylist()
    


    useEffect(()=>{
        getPlayList()
    },[])

    const getPlayList= async()=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.get(`/api/user/playlists`,{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setPlaylist(response.data.playlists);
        } catch (error) {
            console.log(error);
        }
    }


    const deletePlaylistHandler= async (id)=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.delete(`/api/user/playlists/${id}`,{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setPlaylist(response.data.playlists);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <Navbar/>
        <div className="product-main-sidebar">
            <Sidebar/>
            <main style={{margin:"0rem"}} className="product-main playlist-parent-main p-1">
                {playlist.map(item=>(
                    <div className="playlist-name-parent">
                    <Link to={`/playlist/${item._id}`} key={item._id}>
                        <h1 className="playlist-name" >{item.title}</h1>
                        <div>{item.videos.length} videos</div>
                    </Link>
                        <div onClick={()=>deletePlaylistHandler(item._id)}><span class="material-icons cursor-pointer">delete</span></div>
                    </div>
                ))}
            </main>
        </div>
        </>
    )
}
