import axios from 'axios'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {useParams} from 'react-router-dom'
import { Navbar } from '../../components/navbar/navbar'
import { useLike } from '../../context/like-context'
import './video-detail.css'
import { dislikedVideoHandler } from '../../util-functions/dislike'
import { useVideo } from '../../context/video-context'
import { watchLaterHandler } from '../../util-functions/watch-later'
import { Modal } from '../../components/modal/modal'
import { usePlaylist } from '../../context/playlist-context'
import { modalHandler } from '../../util-functions/modal-handler'
// import {video}
export const VideoDetail=()=>{
    const {videoDetail,like,setLike}=useLike()
    const {setWatchLater}=useVideo()
    const {_id}=useParams()
    const [dislike,setDislike]=useState(false)
    const {modal,setSentPlayList,setModal}=usePlaylist()

    const likedVideosHandler= async (video,setDislike)=>{
      const token=localStorage.getItem("user")
      try {
        const response=await axios.post('/api/user/likes',{
          video
        },{
          headers: {
            authorization: token, // passing token as an authorization header
          },
        })
        setLike(response.data.likes);
        setDislike(false)
      } catch (error) {
        console.log(error);
      }
    }
    return(
        <>
          <Navbar/>
          <div className='player-wrapper'>
          <ReactPlayer
          className='react-player'
          url={`https://www.youtube.com/watch?v=${_id}`}
          width="900px"
          playing={true}
          />
          </div>
          <div>
          <div>
          <p className='video-description'>{videoDetail.description}</p>
          </div>
          {modal&&<Modal/>}
        <div className='video-icon-container'>
         <div className='video-detail-icon flex'>
           {like.some(item=>item._id===_id)?<div onClick={()=>dislikedVideoHandler(videoDetail,setLike)} className='flex pointer'>
         <span class="material-icons">thumb_up</span>
         <span>1.4 M</span>
           </div>:<div onClick={()=>likedVideosHandler(videoDetail,setDislike)} className='flex pointer'>
         <span class="material-icons-outlined">thumb_up</span>
         <span>1.4 M</span>
           </div>}
           {
             dislike?<div onClick={()=>dislikedVideoHandler(videoDetail,setLike)} className='flex pointer'>
             <span class="material-icons">thumb_down</span>
             <span>DISLIKE</span>
               </div>:<div onClick={()=>dislikedVideoHandler(videoDetail,setLike,setDislike)} className='flex pointer'>
         <span class="material-icons-outlined">thumb_down</span>
         <span>DISLIKE</span>
           </div>
           }
           <div onClick={()=>watchLaterHandler(videoDetail,setWatchLater)} className='flex pointer'>
         <span class="material-icons-outlined">watch_later</span>
         <span>WATCH LATER</span>
           </div>
           <div onClick={()=>modalHandler(videoDetail,setModal,setSentPlayList)} className='flex'>
           <span class="material-icons-outlined">queue_music</span>
         <span>ADD TO PLAYLIST</span>
           </div>
         </div>
         </div>
          </div>
      </>
      )
}

