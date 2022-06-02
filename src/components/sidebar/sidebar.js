import './sidebar.css'
import { NavLink } from 'react-router-dom'
import { useLike } from '../../context/like-context'
export const Sidebar=()=>{
    const {display}=useLike()
    return(
        <aside style={{display:display}} className="product-sidebar p-2">
            <div className='sidebar-links-parent'>
                <div>
            <NavLink to="/" className="price p-1">
                <h2 className="sidebar-links"><span class="material-icons">home</span><span>Home</span></h2>
            </NavLink>
            <NavLink to="/likedvideos" className="price p-1">
                <h2 className="sidebar-links"><span class="material-icons">thumb_up</span>Liked videos</h2>
            </NavLink>
            <NavLink to="/playlist" className="price p-1">
                <h2 className="sidebar-links"><span class="material-icons">playlist_add_check</span>Play List</h2>
            </NavLink>
            <NavLink to="/watchlater" className="price p-1">
                <h2 className="sidebar-links"><span class="material-icons">watch_later</span>Watch later</h2>
            </NavLink>
            <NavLink to="/history" className="price p-1">
                <h2 className="sidebar-links"><span class="material-icons">history</span>History</h2>
            </NavLink>
            </div>
            </div>
        </aside>
    )
}