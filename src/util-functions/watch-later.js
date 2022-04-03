import axios from "axios";
export const watchLaterHandler= async (video,setWatchLater)=>{
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
}