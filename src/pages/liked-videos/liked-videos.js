import { useLike } from "../../context/like-context"
import './likes-videos.css'
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { dislikedVideoHandler } from "../../util-functions/dislike";
import { VideoCard } from "../../components/video-card/video-card";
import { Modal } from "../../components/modal/modal";
import { usePlaylist } from "../../context/playlist-context";
import { getToken } from "../../util-functions/get-token";
import { Link } from "react-router-dom";

export const LikedVideos=()=>{
    const {like,setLike}=useLike()
    const {modal}=usePlaylist()
    console.log(getToken(),"token");    
    return(
        <>
        <Navbar/>
        <div className="product-main-sidebar">
        <Sidebar/>
        <main style={{margin:"0rem"}} className="product-main videolisting-main p-1">
            {getToken()&&
            <div className="showing">
                Liked Videos{" "}({like.length})
            </div>
            }
                {modal&&<Modal/>}
            <div id="all-playlist" className="all-products">
                {getToken()&&like.length===0&&<h1>No Liked Videos</h1>}
                {getToken()?like.map(item=>
                   <div>
                        <VideoCard video={item} />
                        <div className="delete-icon"><span onClick={()=>dislikedVideoHandler(item,setLike)} className="material-icons cursor-pointer">delete</span></div>
                    </div>
                ):<div className="liked-signout">
                    <div>
                    <h2>Keep track of what you Liked</h2>
                    <div className="my-2">Liked Videos isn't viewable when you're signed out.</div>
                    <Link to="/login" class="btn basic">Sign In</Link>
                    </div>
                </div>}
           </div>
        </main>
        </div>
        </>
    ) 
}