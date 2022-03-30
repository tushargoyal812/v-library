import './login.css'
import axios from 'axios'
import { useAuth } from '../../context/auth-context'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { Navbar } from '../../components/navbar/navbar'
export const Login=()=>{
const navigate=useNavigate()
const [logData,setLogData]=useState({email:"",password:""})

const {auth,setAuth}=useAuth()

    const loginHandler= async ()=>{
        try {
            const response=await axios.post('/api/auth/login',logData)
            localStorage.setItem("user",response.data.encodedToken)
            setAuth(true)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <Navbar/>
        <section className="login-section centered align-items">
        <div className="login-wrapper flex flex-direction-col align-items px-3 pb-4">
            <h1 className="mb-3">Login</h1>
            <div className="pb-1">
            <label htmlFor="" className="email-label">Email address</label>
            <div>
                <input onChange={(e)=>setLogData({...logData,email:e.target.value})} type="text" className="login-input px-3" />
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="passwaord-label">Password</label>
            <div>
                <input onChange={(e)=>setLogData({...logData,password:e.target.value})} type="password" className="login-input px-3" />
            </div>
            </div>
            <div className="flex pb-1">
                <input type="checkbox" />
                <div className="remember">Remember me</div>
                <a className="ml-3" href="">Forgot Password?</a>
            </div>
            <div className="mb-1 flex justify-content-center">
                <button onClick={loginHandler} className="btn basic login-page-btn ecom-bg-blue">Login</button>
            </div>
            <div><Link className="new-account" to="/signup">Create New Account </Link></div>
        </div>
    </section>
    </>
    )
}