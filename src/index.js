import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from "./context/auth-context";
import { VideoProvider } from "./context/video-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
    <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
