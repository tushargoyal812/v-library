import axios from "axios"
import { useEffect } from "react"
import './playlist.css'
import { Navbar } from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/sidebar"
import { usePlaylist } from "../../context/playlist-context"
import { Link } from "react-router-dom"
import { getToken } from "../../util-functions/get-token"

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
                  authorization: token,
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
                  authorization: token,
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
            <main style={{margin:"0rem"}} className="product-main p-1">
                {getToken()&&
                <div className="showing">
                Playlist{" "}({playlist.length})
                </div>
                }
                <div className="playlist-parent-main">
                {getToken()?playlist.map(item=>(
                    <div className="playlist-name-parent">
                    <Link to={`/playlist/${item._id}`} key={item._id}>
                        <h1 className="playlist-name" >{item.title}</h1>
                        <div>{item.videos.length} videos</div>
                    </Link>
                        <div onClick={()=>deletePlaylistHandler(item._id)}><span class="material-icons cursor-pointer">delete</span></div>
                    </div>
                )):<div className="liked-signout">
                <div>
                <h2>Keep track of what you Added in Playlist</h2>
                <div className="my-2">Playlist isn't viewable when you're signed out.</div>
                <Link to="/login" class="btn basic">Sign In</Link>
                </div>
            </div>}
            </div>
            </main>
        </div>
        </>
    )
}
