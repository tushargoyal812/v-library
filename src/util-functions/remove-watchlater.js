import axios from "axios";
export const RemoveWatchLaterHandler= async (video,setWatchLater)=>{
    const token=localStorage.getItem("user")
    try {
        const response=await axios.delete(`/api/user/watchlater/${video._id}`,
        {
            headers:{
                authorization:token
            }
        })
        setWatchLater(response.data.watchlater);
    } catch (error) {
        console.log(error);
    }
}