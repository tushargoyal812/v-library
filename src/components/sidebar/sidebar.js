import './sidebar.css'
import { Link } from 'react-router-dom'
import { useVideo } from '../../context/video-context'
export const Sidebar=()=>{
    const {watchLater}=useVideo()
    return(
        <aside class="product-sidebar p-2">
            {/* <div class="filter p-1">
                <h2>filter</h2> <a href="">clear</a>
            </div> */}
            <Link to="/" class="price p-1">
                <h2 class="">Home</h2>
            </Link>
            <div class="price p-1">
                <h2 class="">Liked videos</h2>
            </div>
            <div class="price p-1">
                <h2 class="">Play List</h2>
            </div>
            <Link to="/watchlater" class="price p-1">
                <h2 class="">Watch later</h2>
                <span>{watchLater.length}</span>
            </Link>
            <div class="price p-1">
                <h2 class="">History</h2>
            </div>
            <div class="price p-1">
                <h2 class="">Your videos</h2>
            </div>
        </aside>
    )
}