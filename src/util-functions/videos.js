import axios from "axios";
export const videos= async (setVideoItem)=>{
    const response=await axios.get('/api/videos')
    setVideoItem(response.data.videos);
}