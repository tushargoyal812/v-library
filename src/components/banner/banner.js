import './banner.css'
import {useNavigate} from 'react-router-dom'
export const Banner=()=>{
    const navigate=useNavigate()
    return(
        <dir className="banner-parent">
            <img className="video-banner" src={"https://www.mydoclinic.com/assets/site/images/music_banner.jpg"} alt="banner-image" />
            <button onClick={()=>navigate('/videolisting')} className='watch-now-btn'>Watch now</button>
        </dir>
    )
}