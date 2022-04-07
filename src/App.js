import "./App.css";
import { Home } from "./pages/home/home";
import {Routes,Route,useParams} from 'react-router-dom'
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signup/signup";
import { VideoListing } from "./pages/video-listing/video-listing";
import { WatchLater } from "./pages/watch-later/watch-later";
import { PlayList } from "./pages/playlist/playlist";
import { PlaylistDetail } from "./pages/playlist-detail/playlist-detail";
import { VideoDetail } from "./pages/video-detail.js/video-detail";
import { LikedVideos } from "./pages/liked-videos/liked-videos";
import {History} from './pages/history/history'
import { FilteredCategory } from "./pages/filtered-category/filtered-category";
import { FourZeroFour } from "./pages/404/404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/videolisting" element={<VideoListing/>} />
        <Route path="/watchlater" element={<WatchLater/>} />
        <Route path="/playlist" element={<PlayList/>} />
        <Route path="/playlist/:_id" element={<PlaylistDetail/>} />
        <Route path="/videodetail/:_id" element={<VideoDetail/>} />
        <Route path="/likedvideos" element={<LikedVideos/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/filtered/:_id" element={<FilteredCategory/>} />
        <Route path="*" element={<FourZeroFour/>} />
      </Routes>
    </div>
  );
}

export default App;
