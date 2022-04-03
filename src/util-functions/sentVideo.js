import axios from "axios";
export const sentVideo= async (video,id)=>{
    const token=localStorage.getItem("user")
    try {
        const reponse=await axios.post(`/api/user/playlists/${id}`,{
            video
        },{
            headers: {
              authorization: token, // passing token as an authorization header
            },
          })
    } catch (error) {
        console.log(error);
    }
}