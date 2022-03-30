import {Link} from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
export const Navbar=()=>{
    const {auth,setAuth}=useAuth()

    const logoutHandler=()=>{
        localStorage.removeItem("user")
        setAuth(false)
    }

    return (
        <header class="e-com-header">
        <nav class="e-com-navbar shop-nav ecom-bg-blue">
            <Link to="/">
                <div class="ecom-white">showTube</div>
            </Link>
            <ul class="e-com-nav-items">
            </ul>
            <input type="text" class="search-input ecom-search" placeholder="search" />
            <div class="e-com-social">
                <div class="ecom-login-container">
                    {auth?<Link onClick={logoutHandler} to="/login">
                        <button class="login-btn ecom-bg-white ecom-blue">Log out</button>
                    </Link>:<Link to="/login">
                        <button class="login-btn ecom-bg-white ecom-blue">Login</button>
                    </Link>}
                </div>
            </div>
        </nav>
    </header>
    )
}