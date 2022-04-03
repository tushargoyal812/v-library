import './sidebar.css'
import { Link } from 'react-router-dom'
export const Sidebar=()=>{
    return(
        <aside className="product-sidebar p-2">
            {/* <div className="filter p-1">
                <h2>filter</h2> <a href="">clear</a>
            </div> */}
            <Link to="/" className="price p-1">
                <h2 className="">Home</h2>
            </Link>
            <Link to="/likedvideos" className="price p-1">
                <h2 className="">Liked videos</h2>
            </Link>
            <Link to="/playlist" className="price p-1">
                <h2 className="">Play List</h2>
            </Link>
            <Link to="/watchlater" className="price p-1">
                <h2 className="">Watch later</h2>
            </Link>
            <div className="price p-1">
                <h2 className="">History</h2>
            </div>
            <div className="price p-1">
                <h2 className="">Your videos</h2>
            </div>
        </aside>
    )
}