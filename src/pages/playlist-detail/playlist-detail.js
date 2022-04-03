import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { usePlaylist } from "../../context/playlist-context";
import './playlist-detail.css'
export const PlaylistDetail=()=>{
    const {playlist}=usePlaylist()
    const {_id}=useParams()
    const [reset,setReset]=useState([])


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
            <main style={{margin:"0rem"}} className="product-main p-1">
        <div className="playlist-container">
            {reset&&reset.map(item=>(
                <div className="playlist-details">
                    <img className="playlist-image" src={item.image} />
                    <h2 className="playlist-name mx-1">{item.title} </h2>
                    <span onClick={()=>deleteVideoHandler(item._id)}><span class="material-icons cursor-pointer">delete</span></span>
                </div>
            ))}
        </div>
        </main>
        </div>
        </>
    )
}