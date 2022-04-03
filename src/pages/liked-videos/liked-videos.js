import { useLike } from "../../context/like-context"
import './likes-videos.css'
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { dislikedVideoHandler } from "../../util-functions/dislike";

export const LikedVideos=()=>{
    const {like,setLike}=useLike()
    console.log(like);
    return(
        <>
        <Navbar/>
        <div className="product-main-sidebar">
            <Sidebar/>
            <main style={{margin:"0rem"}} className="product-main p-1">
        <div className="playlist-container">
            {like.map(item=>(
                <div className="playlist-details">
                    <img className="playlist-image" src={item.image} />
                    <div>
                    <h2 className="playlist-name mx-1">{item.description} </h2>
                    <div onClick={()=>dislikedVideoHandler(item,setLike)} className='dislike-in-like flex mt-2'>
                    <span class="material-icons-outlined">thumb_down</span>
                    <span>DISLIKE</span>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        </main>
        </div>
        </>
    ) 
}