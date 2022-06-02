import axios from "axios";
export const createPlaylistHandler= async (playlistName,setPlaylist)=>{
    const token=localStorage.getItem("user")
    try {
        const response=await axios.post('/api/user/playlists',{
            playlist: {title: playlistName, description:"bar bar bar" }
         },{
            headers: {
              authorization: token,
            },
          })
          setPlaylist(response.data.playlists);
    } catch (error) {
        console.log(error);
    }
}