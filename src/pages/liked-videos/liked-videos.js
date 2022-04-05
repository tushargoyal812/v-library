import { useLike } from "../../context/like-context"
import './likes-videos.css'
import { Navbar } from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/sidebar";
import { dislikedVideoHandler } from "../../util-functions/dislike";
import { VideoCard } from "../../components/video-card/video-card";
import { Modal } from "../../components/modal/modal";
import { usePlaylist } from "../../context/playlist-context";
import { getToken } from "../../util-functions/get-token";
import { useNavigate,Link } from "react-router-dom";

export const LikedVideos=()=>{
    const {like,setLike}=useLike()
    const {modal}=usePlaylist()
    const navigate=useNavigate()
    console.log(getToken(),"token");    
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
        // <>
        // <Navbar/>
        // <div className="product-main-sidebar">
        //     <Sidebar/>
        //     <main style={{margin:"0rem"}} className="product-main p-1">
        // <div className="playlist-container">
        //     {like.map(item=>(
        //         <div key={item._id} className="playlist-details">
        //             <img className="playlist-image" src={item.image} />
        //             <div>
        //             <h2 className="playlist-name mx-1">{item.description} </h2>
        //             <div onClick={()=>dislikedVideoHandler(item,setLike)} className='dislike-in-like flex mt-2'>
        //             <span class="material-icons-outlined">thumb_down</span>
        //             <span>DISLIKE</span>
        //             </div>
        //             </div>
        //         </div>
        //     ))}
        // </div>
        // </main>
        // </div>
        // </>
    ) 
}