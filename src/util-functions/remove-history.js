import axios from "axios";

export const removeHistory= async (id,setHistory)=>{
    const token=localStorage.getItem("user")
    try {
        const response=await axios.delete(`/api/user/history/${id}`,{
            headers: {
              authorization: token,
            },
          })
          setHistory(response.data.history);
    } catch (error) {
        console.log(error);
    }
}