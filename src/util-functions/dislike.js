import axios from "axios";
export const dislikedVideoHandler=async(video,setLike,setDislike)=>{
  const token=localStorage.getItem("user")
  console.log(video);
  try {
    const response=await axios.delete(`/api/user/likes/${video._id}`,{
      headers: {
        authorization: token, // passing token as an authorization header
      },
    })
    setLike(response.data.likes);
    setDislike(true)
  } catch (error) {
    console.log(error);
  }
}