import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context"
import { useVideo } from "../../context/video-context";
import { videos } from "../../util-functions/videos";
import { Navbar } from "../../components/navbar/navbar";
import { Modal } from "../../components/modal/modal";
import { usePlaylist } from "../../context/playlist-context";
import { VideoCard } from "../../components/video-card/video-card";
import { Sidebar } from "../../components/sidebar/sidebar";

export const FilteredCategory=()=>{
    const {category,sentCategory}=useAuth()
    const {videoItem,setVideoItem}=useVideo()
    const {modal}=usePlaylist()
    const [filteredCategory,setFilteredCategory]=useState([])
    useEffect(()=>{
        videos(setVideoItem)
    },[])
    
    const filteredData=(videoItem.filter(item=>item.creator===sentCategory.categoryName));
    return(
        <>
        <Navbar/>
        <div className="product-main-sidebar">
            <Sidebar/>
        <main style={{margin:"0rem"}} className="product-main videolisting-main p-1">
            <div>
                <span id="hamburger" className="material-icons">
                    menu
                </span>
            </div>
            <div className="showing ">
                {sentCategory.categoryName}
            </div>
                {modal&&<Modal/>}
            <div className="all-products">
                {filteredData.map(item=><VideoCard video={item} />)}
           </div>
        </main>
        </div>
        </>
        // <div>
        //     {filteredData.map(item=>(
        //         <img src={item.image} alt="" srcset="" />
        //     ))}
        // </div>
        ) 
}