import axios from "axios";

export const historyHandler= async (video,setHistory)=>{
    const token=localStorage.getItem("user")
    try {
        const response=await axios.post('/api/user/history',{
            video
        }, {
            headers: {
              authorization: token, // passing token as an authorization header
            },
          })
          setHistory(response.data.history);
    } catch (error) {
        console.log(error);
    }
}