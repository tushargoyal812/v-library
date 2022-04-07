import { Navbar } from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/sidebar"
import { useVideo } from "../../context/video-context"
import { removeHistory } from "../../util-functions/remove-history"
import {VideoCard} from "../../components/video-card/video-card"
import { usePlaylist } from "../../context/playlist-context"
import { Modal } from "../../components/modal/modal"
import './history.css'
import { getToken } from "../../util-functions/get-token"
import { Link } from "react-router-dom"
import axios from "axios"

export const History=()=>{
    const {history,setHistory}=useVideo()
    const {modal}=usePlaylist()

    const clearHistoryHandler=async()=>{
        const token=localStorage.getItem("user")
        try {
            const response=await axios.delete('/api/user/history/all',{
                headers: {
                  authorization: token, // passing token as an authorization header
                },
              })
              setHistory(response.data.history);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        <Navbar/>
        <div className="product-main-sidebar">
        <Sidebar/>
        <main style={{margin:"0rem"}} className="product-main videolisting-main p-1">
            {getToken()&&
            <div>
                <div className="showing">
                    History{" "}({history.length})
                </div>
            </div>
            }

            <div className="clear-history">
            <button onClick={()=>clearHistoryHandler()}>clear all history</button>
            </div>
                {modal&&<Modal/>}
            <div className="all-products">
                {getToken()&&history.length===0&&<h1>No History</h1>}
                {getToken()?history.map(item=>
                <div>
                    <VideoCard video={item} />
                    <div className="delete-icon-history"><span onClick={()=>removeHistory(item._id,setHistory)} className="material-icons cursor-pointer">delete</span></div>
                </div>):
                <div className="liked-signout">
                <div>
                <h2>Keep track of what you Watch</h2>
                <div className="my-2">Watch History isn't viewable when you're signed out.</div>
                <Link to="/login" class="btn basic">Sign In</Link>
                </div>
                </div>}
           </div>
        </main>
        </div>
        </>
        // <>
        // <Navbar/>
        // <div class="product-main-sidebar ">
        // <Sidebar/>
        // <main class="product-main p-1">
        //     <div>
        //         <span id="hamburger" class="material-icons">
        //             menu
        //         </span>
        //     </div>
        //     <div class="showing p-2">
        //         Showing All Products
        //     </div>
        //     <div class="all-products">
        //         {history.map(video=>(
        //             <div className="card quiz-card">
        //             <div className="card-main-section quiz-card-main">
        //                 <img src={video.image} className="product-img quiz-img" alt="category-image" />
        //                 <main className="middle p-1">
        //                     <p className="para"></p>
        //                     <div className="flex space-between mt-1">
        //                         <button onClick={()=>removeHistory(video._id,setHistory)} className="btn start-quiz-btn quiz-bg-color">remove</button>
        //                     </div>
        //                 </main>
        //             </div>
        //         </div>
        //         ))}
        //    </div>
        // </main>
        // </div>
        // </>
    )
}