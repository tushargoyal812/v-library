import {Link} from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
export const Navbar=()=>{
    const {auth,setAuth}=useAuth()

    const logoutHandler=()=>{
        localStorage.removeItem("user")
        setAuth(false)
    }

    return (
        <header className="e-com-header">
        <nav className="e-com-navbar shop-nav ecom-bg-blue">
            <Link to="/">
                <div className="ecom-white">showTube</div>
            </Link>
            <ul className="e-com-nav-items">
                <Link to="/videolisting">videos</Link>
            </ul>
            <input type="text" className="search-input ecom-search" placeholder="search" />
            <div className="e-com-social">
                <div className="ecom-login-container">
                    {auth?<Link onClick={logoutHandler} to="/login">
                        <button className="login-btn ecom-bg-white ecom-blue">Log out</button>
                    </Link>:<Link to="/login">
                        <button className="login-btn ecom-bg-white ecom-blue">Login</button>
                    </Link>}
                </div>
            </div>
        </nav>
    </header>
    )
}