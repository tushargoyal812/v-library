import {Link,NavLink} from 'react-router-dom'
import { useAuth } from '../../context/auth-context'
import { useLike } from '../../context/like-context'
import './navbar.css'
export const Navbar=()=>{
    const {auth,setAuth}=useAuth()
    const {display,setDisplay}=useLike()

    const logoutHandler=()=>{
        localStorage.removeItem("user")
        setAuth(false)
    }

    

    return (
        <header className="e-com-header">
        <nav className="e-com-navbar shop-nav ecom-bg-blue">
            <NavLink to="/">
                <div className="ecom-white">show<span className='tube'>Tube</span></div>
            </NavLink>
            <ul className="e-com-nav-items">
                <NavLink to="/videolisting">videos</NavLink>
            </ul>
            <div className="e-com-social">
                <div className="ecom-login-container">
                    {auth?<NavLink onClick={logoutHandler} to="/login">
                        <button className="login-btn ecom-bg-white ecom-blue">Log out</button>
                    </NavLink>:<NavLink to="/login">
                        <button className="login-btn ecom-bg-white ecom-blue">Login</button>
                    </NavLink>}
                </div>
            </div>
        </nav>
    </header>
    )
}