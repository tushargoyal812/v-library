import axios from "axios";

export const historyHandler= async (video,setHistory)=>{
    const token=localStorage.getItem("user")
    try {
        const response=await axios.post('/api/user/history',{
            video
        }, {
            headers: {
              authorization: token,
            },
          })
          setHistory(response.data.history);
    } catch (error) {
        console.log(error);
    }
}