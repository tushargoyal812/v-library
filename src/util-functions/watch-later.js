import axios from "axios";
export const watchLaterHandler= async (video,setWatchLater,auth,navigate)=>{
    if(auth)
    {
        const token=localStorage.getItem("user")
    try{
        const response=await axios.post("/api/user/watchlater",
    {
     video
    },
    {
        headers:{
            authorization:token
        }
    }
    )
    setWatchLater(response.data.watchlater)
    }catch(error){
        console.log(error)
    }
    }else{
        navigate("/login")
    }
}