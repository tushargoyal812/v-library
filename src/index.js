import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from "./context/auth-context";
import { VideoProvider } from "./context/video-context";
import { PlaylistProvider } from "./context/playlist-context";
import { LikeProvider } from "./context/like-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <LikeProvider>
    <PlaylistProvider>
    <VideoProvider>
    <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
    </VideoProvider>
    </PlaylistProvider>
    </LikeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
