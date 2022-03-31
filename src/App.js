import "./App.css";
import { Home } from "./pages/home/home";
import {Routes,Route} from 'react-router-dom'
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signup/signup";
import { VideoListing } from "./pages/video-listing/video-listing";
import { WatchLater } from "./pages/watch-later/watch-later";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/videolisting" element={<VideoListing/>} />
        <Route path="/watchlater" element={<WatchLater/>} />
      </Routes>
    </div>
  );
}

export default App;
