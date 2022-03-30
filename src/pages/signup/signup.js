import { Navbar } from '../../components/navbar/navbar'
import './signup.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
export const SignUp=()=>{

    const navigate=useNavigate()

    const [signUpData,setSignUpData]=useState({firstName:"",lastName:"",email:"",password:""})

    const signupHandler= async ()=>{
        try {
            const response=await axios.post('/api/auth/signup',signUpData)
            localStorage.setItem("user",response.data.encodedToken);
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <Navbar/>
        <section className="signup-section centered align-items">
        <div className="signup-wrapper flex flex-direction-col align-items px-3 pb-4">
            <h1 className="mb-3">Signup</h1>
            <div className="pb-1">
            <label htmlFor="" className="email-label">First Name</label>
            <div>
                <input onChange={(e)=>setSignUpData({...signUpData,firstName:e.target.value})} type="text" className="signup-input px-3" />
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="email-label">Last Name</label>
            <div>
                <input onChange={(e)=>setSignUpData({...signUpData,lastName:e.target.value})} type="text" className="signup-input px-3" />
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="email-label">Email address</label>
            <div>
                <input onChange={(e)=>setSignUpData({...signUpData,email:e.target.value})} type="text" className="signup-input px-3" />
            </div>
            </div>
            <div className="pb-1">
            <label htmlFor="" className="passwaord-label">Password</label>
            <div>
                <input onChange={(e)=>setSignUpData({...signUpData,password:e.target.value})} type="password" className="signup-input px-3" />
            </div>
            </div>
            <div className="flex pb-1">
                <input style={{padding: "2rem"}} type="checkbox" />
                <div className="remember">I accept all Terms & Conditions</div>
            </div>
            <div className="mb-1 flex justify-content-center">
                <button onClick={signupHandler} className="btn basic signup-page-btn ecom-bg-blue">Create New Account</button>
            </div>
            <div><Link className="new-account" to="/login">Already have an account </Link></div>
        </div>
    </section>
    </>
    )
}