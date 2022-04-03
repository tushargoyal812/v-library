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

export const VideoListing=()=>{
    const {videoItem,setVideoItem,watchLater,setWatchLater}=useVideo()
    const {setSentPlayList,modal,setModal}=usePlaylist()
    const {setVideoDetail}=useLike()

    useEffect(()=>{
        videos()
    },[])

    const videos= async ()=>{
        const response=await axios.get('/api/videos')
        setVideoItem(response.data.videos);
    }



    const RemoveWatchLaterHandler= async (video)=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.delete(`/api/user/watchlater/${video._id}`,
            {
                headers:{
                    authorization:token
                }
            })
            setWatchLater(response.data.watchlater);
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
            <div>
                <span id="hamburger" className="material-icons">
                    menu
                </span>
            </div>
            <div className="showing ">
                All videos
            </div>
{/* 
                {modal&&<div className="modal">
                <div className="modal-header p-1">
                <h3 className="">Save to playlist</h3>
                <div className='playlist-parent' onClick={()=>setModal(false)}><span className="material-icons">cancel</span></div>
                 </div>
                <hr />
                <div className="modal-body">
                    {playlist.map(item=>(
                        <div key={item._id}>
                            <input onChange={()=>onChangeHandler(item._id)} type="checkbox" />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
                {playlistName?<div>
                    <label htmlFor="">Name</label>
                    <input onChange={(e)=>setPlaylistInput(e.target.value)} type="text" placeholder='enter playlist name' />
                </div>:""}
                <hr />
                <div className="modal-footer">
                    {playlistName?<div onClick={()=>createPlaylistHandler(playlistInput)} className='create-playlist'><span class="material-icons">add</span>Create</div>:<div onClick={()=>setPlaylistName(true)} className='create-playlist'><span className="material-icons">add</span>create play list</div>}
                </div>
                </div>} */}

                {modal&&<Modal/>}
           
            <div className="all-products">
                {videoItem.map(video=>(
                    <div key={video.id} className="card quiz-card">
                    <div className="card-main-section quiz-card-main">
                        <Link onClick={()=>setVideoDetail(video)} to={`/videodetail/${video._id}`}>
                        <img src={video.image} className="product-img quiz-img" alt="category-image" />
                        </Link>
                        <main className="middle p-1">
                            <p className="para">{video.categoryName}</p>
                            <div className="flex space-between mt-1">
                                <div>
                                {watchLater.some(item=>item._id===video._id)?<button onClick={()=>RemoveWatchLaterHandler(video)} className="btn start-quiz-btn quiz-bg-color">remove from Watch Later</button>:<button onClick={()=>watchLaterHandler(video,setWatchLater)} className="btn start-quiz-btn quiz-bg-color">Watch Later</button>}
                                </div>
                            </div>
                            <div onClick={()=>modalHandler(video,setModal,setSentPlayList)} className='playlist-parent'><span className="material-icons playlist-icon">queue_music</span></div>
                        </main>
                    </div>
                </div>
                ))}
           </div>
        </main>
        </div>
        </>
    )
}