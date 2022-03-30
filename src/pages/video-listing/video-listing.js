import axios from 'axios'
import './video-listing.css'
import { useEffect } from 'react'
import {Navbar} from '../../components/navbar/navbar'
import { Sidebar } from '../../components/sidebar/sidebar'
import { useVideo } from '../../context/video-context'
export const VideoListing=()=>{

    const {videoItem,setVideoItem,watchLater,setWatchLater}=useVideo()
   

    useEffect(()=>{
        videos()
    })

    const videos= async ()=>{
        const response=await axios.get('/api/videos')
        setVideoItem(response.data.videos);
    }

    const watchLaterHandler= async (video)=>{
        const token=localStorage.getItem("user")
        console.log(video);
        console.log(token);
        try{
            const response=await axios.post("/api/user/watchlater",
        {
         video
        },
        {
            headers:{
                authorization:token
            }
        }
        )
        setWatchLater(response.data.watchlater)
        }catch(error){
            console.log(error)
        }
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
        <main style={{margin:"0rem"}} className="product-main p-1">
            <div>
                <span id="hamburger" className="material-icons">
                    menu
                </span>
            </div>
            <div className="showing ">
                All videos
            </div>
           
            <div className="all-products">
                {videoItem.map(video=>(
                    <div key={video.id} className="card quiz-card">
                    <div className="card-main-section quiz-card-main">
                        <img src={video.image} className="product-img quiz-img" alt="category-image" />
                        <main className="middle p-1">
                            <p className="para">{video.categoryName}</p>
                            <div className="flex space-between mt-1">
                                <div>
                                {watchLater.some(item=>item._id===video._id)?<button onClick={()=>RemoveWatchLaterHandler(video)} className="btn start-quiz-btn quiz-bg-color">remove from Watch Later</button>:<button onClick={()=>watchLaterHandler(video)} className="btn start-quiz-btn quiz-bg-color">Watch Later</button>}
                                </div>
                            </div>
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