import { useVideo } from '../../context/video-context'
import { usePlaylist } from '../../context/playlist-context'
import { Link,useNavigate } from 'react-router-dom'
import { useLike } from '../../context/like-context'
import { watchLaterHandler } from '../../util-functions/watch-later'
import { Modal } from '../../components/modal/modal'
import { modalHandler } from '../../util-functions/modal-handler'
import { historyHandler } from '../../util-functions/history-handler'
import { videos } from '../../util-functions/videos'
import { videoHandler } from '../../util-functions/videoHandler'
import { RemoveWatchLaterHandler } from '../../util-functions/remove-watchlater'
import "./video-card.css"
import { useAuth } from '../../context/auth-context'
export const VideoCard=({video})=>{
    const {videoItem,setVideoItem,watchLater,setWatchLater}=useVideo()
    const {setSentPlayList,modal,setModal}=usePlaylist()
    const {setVideoDetail}=useLike()
    const {history,setHistory}=useVideo()
    const {auth}=useAuth()
    const navigate=useNavigate()
    return(
        <div id="video-card" key={video._id} className="card quiz-card">
                    <div className="card-main-section quiz-card-main">
                        <Link onClick={()=>videoHandler(video,setVideoDetail,historyHandler,setHistory)} to={`/videodetail/${video._id}`}>
                        <img src={video.image} className="product-img quiz-img" alt="category-image" />
                        </Link>
                        <main className="middle p-1">
                            <p className="para">{video.categoryName}</p>
                            <div className="flex space-between mt-1">
                                <div>
                                {watchLater.some(item=>item._id===video._id)?<div className='flex'><button id="watch-later-btn" onClick={()=>RemoveWatchLaterHandler(video,setWatchLater)} className="btn start-quiz-btn quiz-bg-color flex">remove from Watch Later</button></div>:<div className='flex'><button id="watch-later-btn" onClick={()=>watchLaterHandler(video,setWatchLater,auth,navigate)} className="btn start-quiz-btn quiz-bg-color flex"><span class="material-icons-outlined">watch_later</span><span>Watch Later</span></button></div>}
                                </div>
                            </div>
                            <div onClick={()=>modalHandler(video,setModal,setSentPlayList,auth,navigate)} className='playlist-parent'><span className="material-icons playlist-icon">queue_music</span></div>
                        </main>
                    </div>
                </div>
    )
}