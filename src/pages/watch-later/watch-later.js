import { Navbar } from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/sidebar"
import { useVideo } from "../../context/video-context"
import { VideoCard } from "../../components/video-card/video-card"
import { getToken } from "../../util-functions/get-token"
import { Link } from "react-router-dom"
import { Modal } from "../../components/modal/modal"
import { usePlaylist } from "../../context/playlist-context"

export const WatchLater=()=>{
    const {watchLater}=useVideo()
    const {modal}=usePlaylist()
    return (
        <>
        <Navbar/>
        <div className="product-main-sidebar">
        <Sidebar/>
        <main style={{margin:"0rem"}} className="product-main videolisting-main p-1">
            {getToken()&&
            <div className="showing">
                Watch Later{" "}({watchLater.length})
            </div>
            }
                {modal&&<Modal/>}
            <div className="all-products">
                {getToken()&&watchLater.length===0&&<h1>No Videos</h1>}
                {getToken()?watchLater.map(item=><VideoCard video={item} />):
                <div className="liked-signout">
                <div>
                <h2>Keep track of what you Added in Watchlater</h2>
                <div className="my-2">Watch later content isn't viewable when you're signed out.</div>
                <Link to="/login" class="btn basic">Sign In</Link>
                </div>
                </div>
            }
           </div>
        </main>
        </div>
        </>
    )
}