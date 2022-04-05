import axios from 'axios'
import './video-listing.css'
import { useEffect,useState } from 'react'
import {Navbar} from '../../components/navbar/navbar'
import { Sidebar } from '../../components/sidebar/sidebar'
import { useVideo } from '../../context/video-context'
import { usePlaylist } from '../../context/playlist-context'
import { Link } from 'react-router-dom'
import { useLike } from '../../context/like-context'
import { watchLaterHandler } from '../../util-functions/watch-later'
import { Modal } from '../../components/modal/modal'
import { modalHandler } from '../../util-functions/modal-handler'
import { historyHandler } from '../../util-functions/history-handler'
import { videos } from '../../util-functions/videos'
import { VideoCard } from '../../components/video-card/video-card'

export const VideoListing=()=>{
    const {videoItem,setVideoItem,watchLater,setWatchLater}=useVideo()
    const {setSentPlayList,modal,setModal}=usePlaylist()
    const {setVideoDetail}=useLike()
    const {history,setHistory}=useVideo()

    useEffect(()=>{
        videos(setVideoItem)
    },[])

    return (
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