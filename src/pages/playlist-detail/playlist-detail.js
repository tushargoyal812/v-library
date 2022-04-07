import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { usePlaylist } from "../../context/playlist-context";
import './playlist-detail.css'
import { VideoCard } from "../../components/video-card/video-card";
import { Modal } from "../../components/modal/modal";
export const PlaylistDetail=()=>{
    const {playlist,modal,reset,setReset}=usePlaylist()
    const {_id}=useParams()


    useEffect(()=>{   
        setReset(playlist.find(list=>list._id===_id).videos);
    },[])


    const deleteVideoHandler= async (id)=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.delete(`/api/user/playlists/${_id}/${id}`,{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setReset(response.data.playlist.videos);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <Navbar/>
        <div className="product-main-sidebar">
        <Sidebar/>
        <main style={{margin:"0rem"}} className="product-main videolisting-main p-1">
            <div className="showing ">
                Playlist Video
            </div>
                {modal&&<Modal/>}
            <div id="all-playlist" className="all-products">
                {reset&&reset.map(item=>
                   <div>
                        <VideoCard video={item} />
                        <div className="delete-icon"><span onClick={()=>deleteVideoHandler(item._id)} className="material-icons cursor-pointer">delete</span></div>
                    </div>
                )}
           </div>
        </main>
        </div>
        </>
        // <>
        // <Navbar/>
        // <div className="product-main-sidebar">
        //     <Sidebar/>
        //     <main style={{margin:"0rem"}} className="product-main p-1">
        // <div className="playlist-container">
        //     {reset&&reset.map(item=>(
        //         <div className="playlist-details">
        //             <img className="playlist-image" src={item.image} />
        //             <h2 className="playlist-name mx-1">{item.title} </h2>
        //             <span onClick={()=>deleteVideoHandler(item._id)}><span class="material-icons cursor-pointer">delete</span></span>
        //         </div>
        //     ))}
        // </div>
        // </main>
        // </div>
        // </>
    )
}