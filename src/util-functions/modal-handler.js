export const modalHandler=(video,setModal,setSentPlayList,auth,navigate)=>{
    if(auth)
    {
        setModal(true)
        setSentPlayList(video)
    }else{
        navigate("/login")
    }
}