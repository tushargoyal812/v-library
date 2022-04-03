import { usePlaylist } from "../../context/playlist-context"
import { createPlaylistHandler } from "../../util-functions/create-playlist"
import { setPlaylistHandler } from "../../util-functions/setPlaylist"
import { sentVideo } from "../../util-functions/sentVideo"

export const Modal=()=>{
    const {playlist,setPlaylist,playlistName,setPlaylistName,playlistInput,setPlaylistInput,setModal,sentPlayList}=usePlaylist()
    return(
        <div className="modal">
                <div className="modal-header p-1">
                <h3 className="">Save to playlist</h3>
                <div className='playlist-parent' onClick={()=>setModal(false)}><span className="material-icons">cancel</span></div>
                 </div>
                <hr />
                <div className="modal-body">
                    {playlist.map(item=>(
                        <div key={item._id}>
                            <input onChange={()=>setPlaylistHandler(item._id,sentPlayList,sentVideo)} type="checkbox" />
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
                {playlistName&&<div>
                    <label htmlFor="">Name</label>
                    <input onChange={(e)=>setPlaylistInput(e.target.value)} type="text" placeholder='enter playlist name' />
                </div>}
                <hr />
                <div className="modal-footer">
                    {playlistName?<div onClick={()=>createPlaylistHandler(playlistInput,setPlaylist)} className='create-playlist'><span class="material-icons">add</span>Create</div>:<div onClick={()=>setPlaylistName(true)} className='create-playlist'><span className="material-icons">add</span>create play list</div>}
                </div>
                </div>
    )
}