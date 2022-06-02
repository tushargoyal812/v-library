import './video-listing.css'
import { useEffect } from 'react'
import {Navbar} from '../../components/navbar/navbar'
import { Sidebar } from '../../components/sidebar/sidebar'
import { useVideo } from '../../context/video-context'
import { usePlaylist } from '../../context/playlist-context'
import { useLike } from '../../context/like-context'
import { Modal } from '../../components/modal/modal'
import { videos } from '../../util-functions/videos'
import { VideoCard } from '../../components/video-card/video-card'

export const VideoListing=()=>{
    const {videoItem,setVideoItem}=useVideo()
    const {modal}=usePlaylist()
    const {display,setDisplay}=useLike()

    useEffect(()=>{
        videos(setVideoItem)
    },[])


    const hamburgerHandler=()=>{
        if(display==="block")
        {
            setDisplay("none")
        }else{
            setDisplay("block")
        }
    }

    return (
        <>
        <Navbar/>
        <div onClick={()=>hamburgerHandler()}>
                <span id="hamburger" className="material-icons">
                    menu
                </span>
            </div>
        <div className="product-main-sidebar">
        <Sidebar/>
        <main style={{margin:"0rem"}} className="product-main videolisting-main p-1">
            <div className="showing ">
                All videos
            </div>
                {modal&&<Modal/>}
            <div id="all-videos" className="all-products">
                {videoItem.map(item=><VideoCard video={item} />)}
           </div>
        </main>
        </div>
        </>
    )
}